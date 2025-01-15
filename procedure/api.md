
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

Course

Create

{{ph-local-url}}/courses/create-course

{
  "title": "Daisyui",
  "prefix": "CSS",
  "code": 105,
  "credits": 3,
  "preRequisiteCourses": [
    {
      "course": "677844cf06caa879f487d074",
      "isDeleted": false
    },
    {
      "course": "6778451106caa879f487d078",
      "isDeleted": false
    }
  ]
}


Faculty 

post routes

{{ph-local-url}}/users/create-faculty

{
    "password": "123",
    "faculty": {
        "designation": "Senior Professor",
        "name": {
            "firstName": "Nafis",
            "middleName": "Ahamed.",
            "lastName": "Iqbal"
        },
        "gender": "male",
        "dateOfBirth": "1980-05-15",
        "email": "nafisahamed@example.com",
        "contactNo": "1234567890",
        "emergencyContactNo": "0987654321",
        "bloogGroup": "O+",
        "presentAddress": "123 Elm Street, Cityville, Country",
        "permanentAddress": "456 Oak Avenue, Townsville, Country",
        "profileImg": "https://example.com/images/johndoe.jpg",
        "academicDepartment": "6774ffb1440fdb9e6dba81e2",
        "isDeleted": false
    }
}








assign faculty

Course er put method

params id: course Id

faculty member: teacher

{{ph-local-url}}/courses/6778446f06caa879f487d070/assign-faculties

{
   "faculties":["677900ff84d489af569652f0","67790175fad321531500857e"] 
}


Remove faculties

{{ph-local-url}}/courses/6778446f06caa879f487d070/remove-faculties

{
   "faculties":["67790175fad321531500857e"] 
}

Create semster registration

{{ph-local-url}}/semester-registrations/create-semester-registration

{
    "academicSemester": "677419fceb4ee272abd4ada6",
    "status": "ONGOING",
    "startDate": "2026-02-15T00:00:00.000Z",
    "endDate": "2026-06-15T00:00:00.000Z",
    "minCredit": 12,
    "maxCredit": 18
}

getall semester registration

{{ph-local-url}}/semester-registrations

Created-offered-course
{{ph-local-url}}/offered-courses/create-offered-course

{
  "semesterRegistration": "678023664f2bcf1c40b9f975",
  "academicSemester": "677419fceb4ee272abd4ada6",
  "academicFaculty": "6774fc9b3328edefe4a5cb3b",
  "academicDepartment": "6774ffb1440fdb9e6dba81e2",
  "course": "677844a506caa879f487d072",
  "faculty": "6779010084d489af569652f2",
  "maxCapacity": 50,
  "section": 1,
  "days": ["Mon", "Wed", "Fri"],
  "startTime": "09:00",
  "endTime": "11:00"
}



Auth login

http://localhost:5000/api/v1/auth/login

{
    "id":"2030020005",
    "password":"123"
}


{{ph-local-url}}/auth/change-password

{
    "oldPassword": "123",
    "newPassword": "1234"
}