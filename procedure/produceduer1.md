

1. first create user interface model but studet create before

2. mongoose docs typescript e statics and methods

3. user validation schema

4. zod e i basic usage e z.infer name e usecase ache

but always not okay it. its okay when interface and model schema are align. if all is come from fronted then i work. but student and admin id i generate and its not optional so not use z.infer

5. user er model status e progress 

6. createstudentinto from services move to student.services ---------------> user.services

7. All account work now hold in user.services

8. first create user collection now connect student collection by user object_id

<!-- createStudentIntoDB in user.services and controller -->

password na dile default password

default password give typecript error so fixed it

now set student role but role includes user interface its include please see user diagram 

so create object user

first manually create userId

studentData.id = newUser.id;
studentData.user = newUser._id;


<!-- why we use Object.keys() -->
const person = {
    name: "Rahim",
    age: 25,
    profession: "Engineer"
};

const keys = Object.keys(person);
console.log(keys); // ["name", "age", "profession"]

<!-- http://localhost:5000/api/v1/users/create-student data -->

{
  "password": "123",  
  "student": {
    "name": {
      "firstName": "Nafis",
      "middleName": "Ahmed",
      "lastName": "Chowdhury"
    },
    "gender": "male",
    "dateOfBirth": "2000-05-15",
    "email": "nafisahamed2@example.com",
    "avatar": "https://example.com/avatar.jpg",
    "contactNo": "01712345678",
    "emergencyContactNo": "01812345678",
    "bloodGroup": "A+",
    "presentAddress": "123 Street Name, Dhaka, Bangladesh",
    "permanentAddress": "456 Village Road, Sylhet, Bangladesh",
    "guardian": {
      "fatherName": "Ahmed Hossain",
      "fatherOccupation": "Businessman",
      "fatherContactNo": "01711223344",
      "motherName": "Fahima Ahmed",
      "motherOccupation": "Teacher",
      "motherContactNo": "01822334455"
    },
    "localGuardian": {
      "name": "Faruk Ahmed",
      "occupation": "Engineer",
      "contactNo": "01933445566",
      "address": "789 Local Street, Dhaka, Bangladesh"
    },
    // "admissionSemester":"675984c0b1e98ec18f4c6c18",
    // "academicDepartment":"675a7d3c632e7fb46dee7ab8",
    "profileImg": "https://example.com/profile.jpg"
  }
}

<!-- end data -->

9. userschema.pre post save uses at user.model

when route user its work before save database


10. bcrypt password

<!-- now work global handler error for cleaning -->

res.status(500).json({
  success:false,
  message: err.message || 'something went wrong'
  error: err,
})

its write all controller but we use it using just next() function

11. global error handler create at middleware ---> globalErrorhandler

12. next (err) take four parameter err, req,res,next

  err: any,
  req: Request,
  res: Response,
  next: NextFunction,

13. Now app.use(globalhandler) set into app.ts.

<!-- create Not found Route and sendResponse Utility -->

14. not found components are middleware folder --------> notFound

15. app.ts create app.use(notFound) route

<!-- SendResponse -->

16. app folder -----> utils ------> sendResponse.ts

<!-- create Index Route -->

17. app folder e routes-----> index.ts





