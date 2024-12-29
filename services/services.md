
import type { Student } from './student.interface';
import { StudentModel } from './student.model';

const createStudentIntoDB = async (student: Student) => {
     const result = await StudentModel.create(student)
     return result;
};

export const StudentServices = {
    createStudentIntoDB
}




const getSingleStudentIntoDB = async(id:string) =>{
    // const result = await Student.findOne({id})
    // return result;

    const result = await Student.aggregate([
        {
            $match: {id:id}
        }
    ])
    return result
}


aggregate use

