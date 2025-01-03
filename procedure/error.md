

academic department e save error off kore daw and errorsource e success, message, errorSource e error daw

1. Duplicate Error type

"err": {
        "errorResponse": {
            "index": 0,
            "code": 11000,
            "errmsg": "E11000 duplicate key error collection: first-project.academicdepartments index: name_1 dup key: { name: \"Department Of CSE\" }",
            "keyPattern": {
                "name": 1
            },
            "keyValue": {
                "name": "Department Of CSE"
            }
        },
        "index": 0,
        "code": 11000,
        "keyPattern": {
            "name": 1
        },
        "keyValue": {
            "name": "Department Of CSE"
        }
    }






2. zod error give

"err": {
        "issues": [
            {
                "code": "invalid_type",
                "expected": "string",
                "received": "undefined",
                "path": [
                    "body",
                    "name"
                ],
                "message": "Name is required"
            },
            {
                "code": "invalid_type",
                "expected": "string",
                "received": "undefined",
                "path": [
                    "body",
                    "academicFaculty"
                ],
                "message": "Faculty is required"
            }
        ],
        "name": "ZodError"
    }




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
// 



Validation error when zod is not in project mongoose Validation error

 "err": {
        "errors": {
            "academicFaculty": {
                "name": "ValidatorError",
                "message": "Path `academicFaculty` is required.",
                "properties": {
                    "message": "Path `academicFaculty` is required.",
                    "type": "required",
                    "path": "academicFaculty"
                },
                "kind": "required",
                "path": "academicFaculty"
            },
            "name": {
                "name": "ValidatorError",
                "message": "Path `name` is required.",
                "properties": {
                    "message": "Path `name` is required.",
                    "type": "required",
                    "path": "name"
                },
                "kind": "required",
                "path": "name"
            }
        },
        "_message": "AcademicDepartment validation failed",
        "name": "ValidationError",
        "message": "AcademicDepartment validation failed: academicFaculty: Path `academicFaculty` is required., name: Path `name` is required."
    }



3. cast error

getsingle admission ulta palta query diye search korlam

{
    "success": false,
    "message": "Cast to ObjectId failed for value \"jgjghj\" (type string) at path \"_id\" for model \"AcademicDepartment\"",
    "errorSources": [
        {
            "path": "",
            "message": "Cast to ObjectId failed for value \"jgjghj\" (type string) at path \"_id\" for model \"AcademicDepartment\""
        }
    ],
    "err": {
        "stringValue": "\"jgjghj\"",
        "valueType": "string",
        "kind": "ObjectId",
        "value": "jgjghj",
        "path": "_id",
        "reason": {},
        "name": "CastError",
        "message": "Cast to ObjectId failed for value \"jgjghj\" (type string) at path \"_id\" for model \"AcademicDepartment\""
    }
}

   "stringValue": "\"jgjghj\"", ami diyechila query korar time e

4. duplicate error academic-depeartment model er save route off kore dei


    "success": false,
    "message": "E11000 duplicate key error collection: first-project.academicdepartments index: name_1 dup key: { name: \"Department Of CSE\" }",
    "errorSources": [
        {
            "path": "",
            "message": "E11000 duplicate key error collection: first-project.academicdepartments index: name_1 dup key: { name: \"Department Of CSE\" }"
        }
    ],
    "err": {
        "errorResponse": {
            "index": 0,
            "code": 11000,
            "errmsg": "E11000 duplicate key error collection: first-project.academicdepartments index: name_1 dup key: { name: \"Department Of CSE\" }",
            "keyPattern": {
                "name": 1
            },
            "keyValue": {
                "name": "Department Of CSE"
            }
        },
        "index": 0,
        "code": 11000,
        "keyPattern": {
            "name": 1
        },
        "keyValue": {
            "name": "Department Of CSE"
        }
    }
