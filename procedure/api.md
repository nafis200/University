
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




