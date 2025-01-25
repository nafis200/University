
import express, { NextFunction, Request, Response } from 'express';
import { upload } from '../../utils/sendImageToCloudinary';
import { createAdminValidationSchema } from '../Admin/admin.validation';
import { createFacultyValidationSchema } from '../Faculty/faculty.validation';
import { createStudentValidationSchema } from '../student/student.validation';
import { USER_ROLE } from './user.constant';
import { UserControllers } from './user.controller';
import { UserValidation } from './user.validation';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';

const router = express.Router();

router.post(
  '/create-student',
  auth(USER_ROLE.admin),
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    // console.log(req.body);
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(createStudentValidationSchema),
  UserControllers.createStudent,
);

router.post(
  '/create-faculty',
  auth(USER_ROLE.admin),
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(createFacultyValidationSchema),
  UserControllers.createFaculty,
);

router.post(
  '/create-admin',
  // auth(USER_ROLE.admin),
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    // console.log(req.body);
    req.body = JSON.parse(req.body.data);
    // come from postman as a data
    next();
  },
  validateRequest(createAdminValidationSchema),
  UserControllers.createAdmin,
);

router.post(
  '/change-status/:id',
  auth('admin'),
  validateRequest(UserValidation.changeStatusValidationSchema),
  UserControllers.changeStatus,
);

// router.get('/me', auth('student', 'faculty', 'admin'), UserControllers.getMe);

export const UserRoutes = router;
