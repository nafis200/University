import httpStatus from 'http-status';
import mongoose from 'mongoose';
import config from '../../config';
import AppError from '../../errors/AppError';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { AcademicSemester } from './../academicSemester/academicSemester.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import {
  generateAdminId,
  generateFacultyId,
  generateStudentId,
} from './user.utils';
import { Admin } from '../Admin/admin.model';
import type { TFaculty } from '../Faculty/faculty.interface';
import { Faculty } from '../Faculty/faculty.model';
import { AcademicDepartment } from '../academicDepartment/academicDepartment.model';
import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary';
import type { TAdmin } from '../Admin/admin.interface';


type CloudinaryResponse = {
  secure_url?: string;
  public_id?: string;
  version?: string;
  signature?: string;
  width?: number;
  height?: number;
  format?: string;
  created_at?: string;
  resource_type?: string;
  bytes?: number;
  type?: string;
  etag?: string;
  placeholder?: boolean;
  url?: string;
};



// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createStudentIntoDB = async (file: any,
  password: string,
  payload: TStudent,) => {
  // create a user object
  const userData: Partial<TUser> = {};

  //if password is not given , use deafult password
  userData.password = password || (config.default_password as string);

  //set student role
  userData.role = 'student';
  userData.email = payload.email  

  // find academic semester info
  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );

  if (admissionSemester === null) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Admission semester not found');
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    //set  generated id
    userData.id = await generateStudentId(admissionSemester);

    const imageName = `${userData.id}${payload?.name?.firstName}`;
    const path = file?.path;
    //send image to cloudinary
    const { secure_url } = await sendImageToCloudinary(imageName, path) as CloudinaryResponse;

    // create a user (transaction-1)
    const newUser = await User.create([userData], { session }); // array

    //create a student
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }
    // set id , _id as user
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id; //reference _id
    payload.profileImg = secure_url;

    // create a student (transaction-2)

    const newStudent = await Student.create([payload], { session });

    if (!newStudent.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create student');
    }

    await session.commitTransaction();
    await session.endSession();

    return newStudent;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Failed to create student');
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createFacultyIntoDB = async (file: any,
  password: string,
  payload: TFaculty,) => {
  // create a user object
  const userData: Partial<TUser> = {};

  //if password is not given , use deafult password
  userData.password = password || (config.default_password as string);

  //set student role
  userData.role = 'faculty';
  //set faculty email
  userData.email = payload.email;
  // find academic department info
  const academicDepartment = await AcademicDepartment.findById(
    payload.academicDepartment,
  );

  if (!academicDepartment) {
    throw new AppError(400, 'Academic department not found');
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    //set  generated id
    userData.id = await generateFacultyId();

    const imageName = `${userData.id}${payload?.name?.firstName}`;
    const path = file?.path;
    //send image to cloudinary
    const { secure_url } = await sendImageToCloudinary(imageName, path) as CloudinaryResponse;


    // create a user (transaction-1)
    const newUser = await User.create([userData], { session }); // array

    //create a faculty
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }
    // set id , _id as user
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id; //reference _id
    payload.profileImg = secure_url;

    // create a faculty (transaction-2)

    const newFaculty = await Faculty.create([payload], { session });

    if (!newFaculty.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create faculty');
    }

    await session.commitTransaction();
    await session.endSession();

    return newFaculty;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};


const createAdminIntoDB = async (

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  file: any,
  password: string,
  payload: TAdmin,
) => {
  // create a user object
  const userData: Partial<TUser> = {};

  //if password is not given , use deafult password
  userData.password = password || (config.default_password as string);

  //set student role
  userData.role = 'admin';
  userData.email = payload.email;
  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    //set  generated id
    userData.id = await generateAdminId();


    const imageName = `${userData.id}${payload?.name?.firstName}`;
    const path = file?.path;
    //send image to cloudinary

    // cloudinary.........................................................................................
  
    const { secure_url } = await sendImageToCloudinary(imageName, path) as CloudinaryResponse;


    // ...................................................................................................


    // create a user (transaction-1)
    const newUser = await User.create([userData], { session });

    //create a admin
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create admin');
    }
    // set id , _id as user
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id; //reference _id
    payload.profileImg = secure_url;

    // create a admin (transaction-2)
    const newAdmin = await Admin.create([payload], { session });

    if (!newAdmin.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create admin');
    }

    await session.commitTransaction();
    await session.endSession();

    return newAdmin;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

const getMe = async (userId: string, role: string) => {
  // const decoded = verifyToken(token, config.jwt_access_secret as string);
  // const { userId, role } = decoded;

  let result = null;
  if (role === 'student') {
    result = await Student.findOne({ id: userId }).populate('user');
  }
  if (role === 'admin') {
    result = await Admin.findOne({ id: userId }).populate('user');
  }

  if (role === 'faculty') {
    result = await Faculty.findOne({ id: userId }).populate('user');
  }

  return result;
};

const changeStatus = async (id: string, payload: { status: string }) => {
  const result = await User.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

export const UserServices = {
  createStudentIntoDB,
  createFacultyIntoDB,
  createAdminIntoDB,
  getMe,
  changeStatus,
};
