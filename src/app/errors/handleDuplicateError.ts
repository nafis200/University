import { TErrorSources, TGenericErrorResponse } from '../interface/error';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleDuplicateError = (err: any): TGenericErrorResponse => {
  // Extract value within double quotes using regex
  const match = err.message.match(/"([^"]*)"/);

  // The extracted value will be in the first capturing group
  const extractedMessage = match && match[1];

  // E11000 duplicate key error collection: first-project.academicdepartments index: name_1 dup key: { name: "Department Of CSE" }

//   পুরো প্যাটার্নটি E11000 duplicate key error ... dup key: { name: "Department Of CSE" } এর সাথে মিলে যায়।
// (.*?) capturing groupটি { name: "Department Of CSE" }-এর মধ্যের অংশ name: "Department Of CSE" ক্যাপচার করে।

  const errorSources: TErrorSources = [
    {
      path: '',
      message: `${extractedMessage} is already exists`,
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: 'Invalid ID',
    errorSources,
  };
};

export default handleDuplicateError;




// "success": false,
// "message": "E11000 duplicate key error collection: first-project.academicdepartments index: name_1 dup key: { name: \"Department Of CSE\" }",
// "errorSources": [
//     {
//         "path": "",
//         "message": "E11000 duplicate key error collection: first-project.academicdepartments index: name_1 dup key: { name: \"Department Of CSE\" }"
//     }
// ],
// "err": {
//     "errorResponse": {
//         "index": 0,
//         "code": 11000,
//         "errmsg": "E11000 duplicate key error collection: first-project.academicdepartments index: name_1 dup key: { name: \"Department Of CSE\" }",
//         "keyPattern": {
//             "name": 1
//         },
//         "keyValue": {
//             "name": "Department Of CSE"
//         }
//     },
//     "index": 0,
//     "code": 11000,
//     "keyPattern": {
//         "name": 1
//     },
//     "keyValue": {
//         "name": "Department Of CSE"
//     }
// }

