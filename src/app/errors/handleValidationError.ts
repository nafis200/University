import mongoose from 'mongoose';
import { TErrorSources, TGenericErrorResponse } from '../interface/error';

const handleValidationError = (
  err: mongoose.Error.ValidationError,
): TGenericErrorResponse => {
  const errorSources: TErrorSources = Object.values(err.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: val?.path,
        message: val?.message,
      };
    },
  );

  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation Error',
    errorSources,
  };
};

export default handleValidationError;




// "err": {
//   "errors": {
//       "academicFaculty": {
//           "name": "ValidatorError",
//           "message": "Path `academicFaculty` is required.",
//           "properties": {
//               "message": "Path `academicFaculty` is required.",
//               "type": "required",
//               "path": "academicFaculty"
//           },
//           "kind": "required",
//           "path": "academicFaculty"
//       },
//       "name": {
//           "name": "ValidatorError",
//           "message": "Path `name` is required.",
//           "properties": {
//               "message": "Path `name` is required.",
//               "type": "required",
//               "path": "name"
//           },
//           "kind": "required",
//           "path": "name"
//       }
//   },
//   "_message": "AcademicDepartment validation failed",
//   "name": "ValidationError",
//   "message": "AcademicDepartment validation failed: academicFaculty: Path `academicFaculty` is required., name: Path `name` is required."
// }




// Object.value(errors?err) provide


// [
//   {
//     name: "ValidatorError",
//     message: "Path `academicFaculty` is required.",
//     properties: {
//       message: "Path `academicFaculty` is required.",
//       type: "required",
//       path: "academicFaculty"
//     },
//     kind: "required",
//     path: "academicFaculty"
//   },
//   {
//     name: "ValidatorError",
//     message: "Path `name` is required.",
//     properties: {
//       message: "Path `name` is required.",
//       type: "required",
//       path: "name"
//     },
//     kind: "required",
//     path: "name"
//   }
// ]
