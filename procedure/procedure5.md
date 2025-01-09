
<!--  -->

1. Course interface and model

first e course create korbo html css javascript then prerequisist marbo

2. model e just prerequist and course royeche.

3. make a controller and services and validation

4. Now create route and test postman

5. Update Dynamically Multiple field

<!-- update course -->

Scenario update course

Title ---> change oop --> Full meaning

code--->  change 101 to 102

credit increase or decrease

prequist course add korte pari delete kori.

kon course add hobe kon course delete hobe kivabe bujbo

isdelete false add hobe true remove kora hobe.


Request body                       Database

course3   isdeleted false          course2
course4   isdeleted false          course4
course2   isdeleted true


New database
Course3, Course4

first e database theke remove koro then add koro

6. courseServices update

7. first e check korbo jei course update korbo sei course ache kina.


const preRequisiteCourses = [
    { course: 'Math 101', isDeleted: false },
    { course: 'Physics 101', isDeleted: true },
    { course: null, isDeleted: true },
    { course: 'Chemistry 101', isDeleted: true },
    { course: 'Biology 101', isDeleted: false }
];

const deletedPreRequisites = preRequisiteCourses
    .filter((el) => el.course && el.isDeleted)
    .map((el) => el.course);

console.log(deletedPreRequisites);



Output: ['Physics 101', 'Chemistry 101']

$pull means remove kora

remove and add dataset into array give it Courses


// $in khuje ber kore ki ki ache

<!-- Add to set -->


<!-- 15-10 -->

ekadik teacher or faculty Same course nite pare.

baic computer skill, nafis ahamed, nabil ahamed nite pare

course services e work kori

so work courseFacultySchema into model interface

courseFaculty name ekta database create kori

now work course model interface.

upsert er kaj holo age theke thakbe update korte hobe ar age na thakle add hobe.

user.services e add kori admin + faculty.

user utils e admin faculty er fuction add kori

At this point ekta course ekadik faculty nite parbe

remove facultu from course




