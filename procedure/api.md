
when academic semester create

http://localhost:5000/api/v1/users/create-student
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
    "email": "nafisahamed20000@example.com",
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
    "admissionSemester": "67740744c8780b59f287e6cf",
    "academicDepartment": "675a7d3c632e7fb46dee7ab8",
    "profileImg": "https://example.com/profile.jpg"
  }
}

Academic-semester

http://localhost:5000/api/v1/academic-semesters/create-academic-semester

{
    "name":"Autumn",
    "code":"01",
    "year":"2031",
    "startMonth":"January",
    "endMonth":"April"
}

Academic faculty 

{{ph-local-url}}/academic-faculties/create-academic-faculty

{
    "name":"faculty of engineering"
}

update
http://localhost:5000/api/v1/academic-faculties/674dc84b6a5d838745c5692b


{
    "name":"faculty of testing"
}

Academic department

create

http://localhost:5000/api/v1/academic-departments/create-academic-department

{
    "name":"Department Of EEE",
    "academicFaculty":"6774fc9b3328edefe4a5cb3b"
}

update

http://localhost:5000/api/v1/academic-departments/6774ffbb440fdb9e6dba81e5

{
    "name":"Department of Chemical Engineering"
}
