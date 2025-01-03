
<!-- Error handling Searching Filtering  -->

Types of Error

1.Operation Error
2.Programmatical Error
3.Unhandled Rejection (async code)
4.Uncaught Exceptional (syn ccode)


first 2 ta error express application e kore felte pari.

last 2 ta application er vitore or bahire hote pare


Handled Error

zod pattern error ---- Mongoose Validation Error --- Monggose Cast Error ---- Mongoose Duplicate Error.

libary thakle seita another pattern

We make a single Global Error to sent a format

Error er pattern

Sucess
message
ErrorSource:{
    path:"",
    message:"",
}


<!-- Duplicate Error -->

global Error handler 

we handle sixth type of error

ZOdError
Validation
CastError
Duplicate Error 11000
AppError
Error

1. we make interface TErrorSource at interface folder at error

2. test duplicate error off save at acadeic department model and write error at at errorsource it give a error.

3. now test zod error and see it is pattern

4. first check the error is zod error or not

5. search zodError handling docs its gives 
ZodError class

<!-- Zod Error -->

create zodError handler

handleZod Error and maintain this

And global handler Error take message from zod Error

<!-- Mongoose Validation Error -->

Mongoose first layer and validation main khela zod khelbe

6. stop the academic route Zod validation and now check it

router.post(
  '/create-academic-department',
  // validateRequest(
  //   AcademicDepartmentValidation.createAcademicDepartmentValidationSchema,
  // ),  comment 
  AcademicDepartmentControllers.createAcademicDepartmemt,
);

comment Zod Validate requet now check this

required true needed academic-faculty at model 

<!-- Cast Error and 11000 Error -->

suppose zod error theke statusCode,message,errorSources sent korlam ar validation theke 

hey you dilam extra 

now create interface folder and error.ts type declared dilam 


<!-- cast Error -->

getacademicdepartment single value ulta palta search korlam tahole ki hobe eitai cast error

localhost:5000/academic-department/fhhf


7. duplicate error academic-department model e suppose save hook or duplicate hooks comment kore diyecho now 

academicDepartmentSchema.pre('save', async function (next) {
  const isDepartmentExist = await AcademicDepartment.findOne({
    name: this.name,
  });

  if (isDepartmentExist) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'This department is already exist!',
    );
  }

  next();
});

eita nai but unique dewa ache then error asbe.

eita always message er moddhe asbe ar eita error ei na


<!-- handled Error AppError unhandledRejection unCaughtExpection -->

8. App Error eita ami baniye felbo

amra to 404, ar error message throw kori oita catch kore nibo and kono path nai


9. unhandledRejection and unCaughtExpection.

server.ts e unhandled uncaughtrejection and

server.ts e must must assign korte hobe

app.ts


chipay cupay console.log(x) dilam stop hoy jabe



<!--       Searching filtering               -->

req three type e data sent kori

body: {}
params: {}
query: {}

ei sob express dey

jokhon ami kichu sent korbo

query: {
  page: "1",
  limit: "10"
  sort: "email"
  searchTerm: "Mr.Nafis"
  email:"n@gmail.com"
}

searchTerm e partial match korbo and 
filter e full name dibo

method Chaining

student.services Chaining er kaj korchi 

ami search korbo email firstName address

 // HOW OUR FORMAT SHOULD BE FOR PARTIAL MATCH  : 
  { email: { $regex : query.searchTerm , $options: i}}
  { presentAddress: { $regex : query.searchTerm , $options: i}}
  { 'name.firstName': { $regex : query.searchTerm , $options: i}}

  eto gulo field eivabe lekha o distrub

  you must dynamic it

  first check searchTerm come or not

   let searchTerm = '';   // SET DEFAULT VALUE 

  // IF searchTerm  IS GIVEN SET IT
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string; 
  }

  asle valo na asle empty string set hobe.

  ami name or email or address or else thing e khujbe ebong diye dibe

uporer format er moton likte hobe

   const searchQuery = Student.find({
     $or: ["name.firstName", "email","address"].map((field) => ({
       [field]: { $regex: searchTerm, $options: 'i' },
    })),
   });
  
  now khujbe name: "naf" na pele email e khujbe na pele address

 ami serach korle {searchTerm:"naf", email"nafis@gmail.com"}

 searchTerm remove korte hobe array theke.

 beacuse se partial check korche abar serachTerm = "naf" soho check korbe so filtering hobe na

 <!-- so amake searchTerm sort eigulo exclude korte hobe -->

  const excludeFields = ['searchTerm', 'sort', 'limit', 'page', 'fields'];
  excludeFields.forEach((el) => delete queryObj[el]);  // DELETING THE FIELDS SO THAT IT CAN'T MATCH OR FILTER EXACTLY

  const queryObj = { ...query }; // copying req.query object so that we can mutate the copy object.

  future query lagte pare

  eibar query obj theke search Term delete so now use it for filtering

    let searchTerm = '';   // SET DEFAULT VALUE 

  // IF searchTerm  IS GIVEN SET IT
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string; 
  }

  
 // HOW OUR FORMAT SHOULD BE FOR PARTIAL MATCH  : 
  { email: { $regex : query.searchTerm , $options: i}}
  { presentAddress: { $regex : query.searchTerm , $options: i}}
  { 'name.firstName': { $regex : query.searchTerm , $options: i}}

  
  // WE ARE DYNAMICALLY DOING IT USING LOOP
   const searchQuery = Student.find({
     $or: studentSearchableFields.map((field) => ({
       [field]: { $regex: searchTerm, $options: 'i' },
    })),
   });

  <!-- searching is end and filtering start its need acquired data -->

  <!-- Only for filtering er jonno queryobj hobe -->
  
   // FILTERING fUNCTIONALITY:
  
  const excludeFields = ['searchTerm', 'sort', 'limit', 'page', 'fields'];
   excludeFields.forEach((el) => delete queryObj[el]);  // DELETING THE FIELDS SO THAT IT CAN'T MATCH OR FILTER EXACTLY

   {email : "nafis@gmail.com"}

  now filtering the query
  const filterQuery = searchQuery
    .find(queryObj)
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });

   
   searchQuery er jaigay 

    Student.find({
     $or: ["name.firstName", "email","address"].map((field) => ({
       [field]: { $regex: searchTerm, $options: 'i' },
    }))
   }).find(queryObj)
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    }); eivabe bosbe


  <!-- Now sorting is sent -->

  Base e sobgulo thakbe but queryobj theke field gulo remove kore dibo

  <!-- Now limit korbo -->

 const limitQuery = await sortQuery.limit()






 <!--  -->

 Method chaining korbo

 searchTerm kintu Student.find() use kore feleche tomake abar Student.find() use korte hobe


 /*
  const queryObj = { ...query }; // copying req.query object so that we can mutate the copy object 
   
  let searchTerm = '';   // SET DEFAULT VALUE 

  // IF searchTerm  IS GIVEN SET IT
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string; 
  }

  
 // HOW OUR FORMAT SHOULD BE FOR PARTIAL MATCH  : 
  { email: { $regex : query.searchTerm , $options: i}}
  { presentAddress: { $regex : query.searchTerm , $options: i}}
  { 'name.firstName': { $regex : query.searchTerm , $options: i}}

  
  // WE ARE DYNAMICALLY DOING IT USING LOOP
   const searchQuery = Student.find({
     $or: studentSearchableFields.map((field) => ({
       [field]: { $regex: searchTerm, $options: 'i' },
    })),
   });

  
   // FILTERING fUNCTIONALITY:
  
  const excludeFields = ['searchTerm', 'sort', 'limit', 'page', 'fields'];
   excludeFields.forEach((el) => delete queryObj[el]);  // DELETING THE FIELDS SO THAT IT CAN'T MATCH OR FILTER EXACTLY

  const filterQuery = searchQuery
    .find(queryObj)
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });

    <!-- search query er value bose jabe -->


    const filterQuery = Student.find({
     $or: studentSearchableFields.map((field) => ({
       [field]: { $regex: searchTerm, $options: 'i' },
    }))})
    .find(queryObj)
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });



    <!--  -->

 
  // SORTING FUNCTIONALITY:
  
  let sort = '-createdAt'; // SET DEFAULT VALUE 
 
 // IF sort  IS GIVEN SET IT
  
   if (query.sort) {
    sort = query.sort as string;
  }

   const sortQuery = filterQuery.sort(sort);


   // PAGINATION FUNCTIONALITY:

   let page = 1; // SET DEFAULT VALUE FOR PAGE 
   let limit = 1; // SET DEFAULT VALUE FOR LIMIT 
   let skip = 0; // SET DEFAULT VALUE FOR SKIP


  // IF limit IS GIVEN SET IT
  
  if (query.limit) {
    limit = Number(query.limit);
  }

  // IF page IS GIVEN SET IT

  if (query.page) {
    page = Number(query.page);
    skip = (page - 1) * limit;
  }

  const paginateQuery = sortQuery.skip(skip);

  const limitQuery = paginateQuery.limit(limit);

  
  
  // FIELDS LIMITING FUNCTIONALITY:

  // HOW OUR FORMAT SHOULD BE FOR PARTIAL MATCH 

  fields: 'name,email'; // WE ARE ACCEPTING FROM REQUEST
  fields: 'name email'; // HOW IT SHOULD BE 

  let fields = '-__v'; // SET DEFAULT VALUE

  if (query.fields) {
    fields = (query.fields as string).split(',').join(' ');

  }

  const fieldQuery = await limitQuery.select(fields);

  return fieldQuery;

  */




<!-- pagination and Field Limiting -->

skip = (page - 1) * limit


  // PAGINATION FUNCTIONALITY:

   let page = 1; // SET DEFAULT VALUE FOR PAGE 
   let limit = 1; // SET DEFAULT VALUE FOR LIMIT 
   let skip = 0; // SET DEFAULT VALUE FOR SKIP


  // IF limit IS GIVEN SET IT
  
  if (query.limit) {
    limit = Number(query.limit);
  }

  // IF page IS GIVEN SET IT

  if (query.page) {
    page = Number(query.page);
    skip = (page - 1) * limit;
  }

  const paginateQuery = sortQuery.skip(skip);

  const limitQuery = paginateQuery.limit(limit);



  <!-- Field Limiting -->

  Name field presentAddress gender bloodGroup ache but i need only [ name, and gender ]

    // FIELDS LIMITING FUNCTIONALITY:

  // HOW OUR FORMAT SHOULD BE FOR PARTIAL MATCH 

  fields: 'name,email'; // WE ARE ACCEPTING FROM REQUEST
  fields: 'name email'; // HOW IT SHOULD BE 

  let fields = '-__v'; // SET DEFAULT VALUE

  if (query.fields) {
    fields = (query.fields as string).split(',').join(' ');

  }

  const fieldQuery = await limitQuery.select(fields);

  return fieldQuery;

  field = - __v 

  ami kichu select korbo na ja ache shob daw




   <!--QueryBuilders  -->

   <!-- I rearrange the query filter -->

   querybuilder.ts e

   class base system e korbo

   Student.find() ei model ta lagbe

   query ja express theke asche

   express:  {
     body:{},
     query:{},
     params:{}
   }

   queryBuilder e duita jinis asbe Student.Model and Query from express.


   ekta query korle hoy se array or object return kore

   query<t[],t>

<!--  -->

student.find(searchablefield).find(filter).sort().limit()



