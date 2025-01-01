<!-- What is higher order function -->

Try catch use

RequestHandler automatic declared req,res,next type

use getAllstudent

<!-- catchAsync 12-1-->

const catchAsync = (fn) =>{

       Promise.resolve(fn(re,res,next)).catch(error=> next(error))

}

it return a promise

promise resolve or give error if error go to global handler

now this code give distrub beacuse it assign asynchronos code

when someone call then its call but by call it dirrectly without call

const catchAsync = (fn) =>{
       return (req,res,next)=>{
       Promise.resolve(fn(re,res,next)).catch(error=> next(error))
       }
}

now function return it dosent call

<!-- implement middleware 12-2 -->

middleware

client ---> route ---> middleware ---> controller ---> serivices

<!-- validate Request middleware 12-3 -->

const validateRequest = async(req,res,next) =>{
       console.log("......")
       next()
}

this middleware accept only req,res,next not else anything but i want to send parameter

const validateRequest = (anyparamater)=>{
       return  async(req,res,next) =>{
       console.log("......", anyparamter)
       next()
}
}



i recive paramerer schema Any zod

eita ke parseAsync hisabe kaj korchi

Now er pass studentVAlidation or validation schema then it parseAsync withstudent validation data


<!-- Create Academic semester Interface -->

stuudent model  e admission semster object refer kore rakche academic semester ke

create academic semeter interface, and academic constant

<!-- create academic Semester Model -->

validationSchema always body er moddhe asbe

TAcademicSemesterName and TAcademicSemesterCode model e enum hisabe use kora hoyeche tor type er jonno

 AcademicSemesterCode,
 AcademicSemesterName,

 ei duita academicSemester.constant.ts e ache ja enum hisabe use hobe model e

 enum hisabe ja thakbe ta amra constant e rakbo

 academicsemester-validation e enum split korle ta type hisabe  name: z.enum([...AcademicSemesterName] as [string, ...string[]]), dite hobe

 academic semester controller services route create and join those

 <!-- academic semester services -->

 create  createAcademicSemesterIntoDB

  <!--Bussiness logic-->

  2030 authum --> created 
  2030 authum --> not possible 

  ekei name e duita semester same year e create kora possible na

model e name e unique korle authum ekbarei create hobe ar jiboneo hobe na

this logic handle academic semester Model we handle it by hooks but we write it services  

// Autumn 01
// Summar 02
// Fall 03

first check autom 01 er sathe req.body er code match kore kina so constant e academicSemesterNameCodeMapper banabo

and check korbo authmn er code 01 asche kina

<!-- Add admision semester to student interface create model 12-9-->

<!-- generate id and key -->

first time student create korle roll no

0000  then porer student before student er sathe +1 hobe

beause of database kono roll nai

we use -createdAt beacuse of last student + 1

<!-- createdAt: -1 --> last in 

student e admissionSemester point korbe academicsemester  so student model e attach koro

<!-- now roll work at user.services at createStudentIntoDB  -->

 admissionSemester soho student database e data insert korbo so database academic semester er value rakhi

 authm summar fall diye than je kono ekta code ami diye postman diye hit korabo

<!-- start -->
  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );

  ei name semester database exists kore kina ta check korte hobe.
<!-- end -->

<!-- implement generatedStudentId -->

user.utils.ts e ache


generatedId only show database e student ache kina authum summar year dekhe na jodi dekhe tahole user.utils e find korte hobe student theke

z.date() use kori nai student validation e beacuse of amra postman theke just string sent korchi so

amra findLastStudentId te 

 //203001   0001

 we need just 0001










