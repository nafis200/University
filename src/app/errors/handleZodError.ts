import { ZodError, ZodIssue } from 'zod';
import { TErrorSources, TGenericErrorResponse } from '../interface/error';

const handleZodError = (err: ZodError): TGenericErrorResponse => {
  const errorSources: TErrorSources = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue.message,
    };
  });

  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation Error',
    errorSources,
  };
};

export default handleZodError;

// export type TErrorSources = {
//   path: string | number;
//   message: string;
// }[];

// export type TGenericErrorResponse = {
//   statusCode: number;
//   message: string;
//   errorSources: TErrorSources;
// };


// "err": {
//         "issues": [
//             {
//                 "code": "invalid_type",
//                 "expected": "string",
//                 "received": "undefined",
//                 "path": [
//                     "body",
//                     "name"
//                 ],
//                 "message": "Name is required"
//             },
//             {
//                 "code": "invalid_type",
//                 "expected": "string",
//                 "received": "undefined",
//                 "path": [
//                     "body",
//                     "academicFaculty"
//                 ],
//                 "message": "Faculty is required"
//             }
//         ],
//         "name": "ZodError"
//     }



// after validation

// "success": false,
//     "message": "Validation Error",
//     "errorSources": [
//         {
//             "path": "name",
//             "message": "Name is required"
//         },
//         {
//             "path": "academicFaculty",
//             "message": "Faculty is required"
//         }
//     ],
//     "err": {
//         "issues": [
//             {
//                 "code": "invalid_type",
//                 "expected": "string",
//                 "received": "undefined",
//                 "path": [
//                     "body",
//                     "name"
//                 ],
//                 "message": "Name is required"
//             },
//             {
//                 "code": "invalid_type",
//                 "expected": "string",
//                 "received": "undefined",
//                 "path": [
//                     "body",
//                     "academicFaculty"
//                 ],
//                 "message": "Faculty is required"
//             }
//         ],
//         "name": "ZodError"
//     }
// }