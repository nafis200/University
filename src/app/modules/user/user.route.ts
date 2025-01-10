import express from 'express';
import { UserControllers } from './user.controller';
import validateRequest from '../../middleware/validateRequest';
import { createStudentValidationSchema, studentValidations } from '../student/student.validation';
import { createFacultyValidationSchema } from '../Faculty/faculty.validation';
import { createAdminValidationSchema } from '../Admin/admin.validation';
import { USER_ROLE } from './user.constant';
import auth from '../../middleware/auth';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(studentValidations.createStudentValidationSchema),
  UserControllers.createStudent,
);

router.post(
  '/create-student',
  auth(USER_ROLE.admin),
  validateRequest(createStudentValidationSchema),
  UserControllers.createStudent,
);

router.post(
  '/create-faculty',
  auth(USER_ROLE.admin),
  validateRequest(createFacultyValidationSchema),
  UserControllers.createFaculty,
);

router.post(
  '/create-admin',
  // auth(USER_ROLE.admin),
  validateRequest(createAdminValidationSchema),
  UserControllers.createAdmin,
);

export const UserRoutes = router;
