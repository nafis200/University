
1. Academic faculty add
2. Academic department add

3. user.utils e bug fixed korte hobe authum 2030 authum 2031 eisob dekto na sob same roll abar authum 2030 summar 2030 eitao dekto na sob same roll dito so bug fixed kora hoyeche logic diye

4. 

Faculty of Engineering ---->  department of CSE,EEE,CHEM

Faculty of Biology ----> PHAR,GEBT,MB,

5. Crete Academic Faculty, interface, model, validation  
<!-- 13-2 video -->

6. Academic department e academic faculty referencing korlei student theke duitai pawa jabe

so Academic department interface e academic faculty er objectId rakte hobe.

7. sobcheye small academic faculty interface and model

8. create Academic faculty controller and services

9. create academic department interface, model, Validation, Service

10. ref academic faculty with department at department model

11. academic department duplicate ache kina  or update korbo ta database e ache kina oita check hobe academic department model e

<!-- 12. AppError class how to populate referencing field -->

12. getAllAcademicDepartment e populate kora

13. getSingleStudentFromDB into student services are clearly shown

14.  const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id })
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};

<!-- NOw error class converted AppError -->

Error class e just message dite pari number dewa jay na


class AppError extends Error {
  public statusCode: number;

  constructor(statusCode: number, message: string, stack = '') {
    super(message);
    this.statusCode = statusCode;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
appError er nijer asset number ar message holo error er assets so constructor call korar time e jehetu error ke extends koreche so you must give it number.

 by default error dey express js ekta stack tress dey synchronous code er jonno

or Error.CaptureStackTrace method dey

(this, this.constructor) ---> this.constructor specefic stack tress dey jei so error erro construtor theke asche tader specefic korar jonno

15. globalError handler e error.statusCode || 500 bosabo


<!-- Transaction and Rollback -->

ACID properties

1. Atomicity, Consistency, Isolation, Durablitity

Atomicity: All process ke atomic unit thinking sob successfull or not sucess

abort or commit

either all success or not


Atomicity (ACID Properties) উদাহরণ
Atomicity নিশ্চিত করে যে একটি ট্রানজ্যাকশন হয় পুরোপুরি সফল হবে, নয়তো কোনো পরিবর্তনই হবে না। অর্থাৎ, ট্রানজ্যাকশন হয় “সবকিছু বা কিছুই না” নীতিতে কাজ করে। এটি ডাটাবেসকে আংশিক পরিবর্তনের (Partial Update) সমস্যা থেকে রক্ষা করে।

উদাহরণ: ব্যাংক অ্যাকাউন্টে টাকা স্থানান্তর
ধরুন, দুটি অ্যাকাউন্ট আছে:

অ্যাকাউন্ট A: $1000
অ্যাকাউন্ট B: $500
কাজ:
অ্যাকাউন্ট A থেকে $200 অ্যাকাউন্ট B-তে স্থানান্তর করা হবে।

Atomicity ছাড়া সমস্যার উদাহরণ:
ট্রানজ্যাকশন শুরু হলো।

𝐴=1000−200=800
A=1000−200=800
𝐵=500
B=500 (এখনো $200 যোগ করা হয়নি)
যদি কোনো কারণে (যেমন সিস্টেম ক্র্যাশ) ট্রানজ্যাকশন মাঝপথে থেমে যায়:
𝐴=800
A=800
𝐵=500
B=500
এক্ষেত্রে:

$200 অ্যাকাউন্ট A থেকে কমানো হয়েছে, কিন্তু অ্যাকাউন্ট B-তে যোগ হয়নি।
মোট ব্যালেন্স: 
800+500=1300
800+500=1300
এটি

2. Consistency 

ধরা যাক, দুটি ব্যাংক অ্যাকাউন্ট আছে:

অ্যাকাউন্ট A: ব্যালেন্স $1000।
অ্যাকাউন্ট B: ব্যালেন্স $500।
Consistency রুল:
অ্যাকাউন্ট A এবং B-এর মোট ব্যালেন্স সবসময় $1500 থাকবে।
অর্থাৎ, 
𝐴+𝐵=1500
ট্রানজাকশনের সময়:
ধরুন, $200 অ্যাকাউন্ট A থেকে অ্যাকাউন্ট B-তে ট্রান্সফার করা হবে।
প্রারম্ভিক অবস্থা (Consistent State):

𝐴=1000
𝐵=500

মোট ব্যালেন্স: 
1000+500=1500

ট্রানজাকশনের ধাপ:


A থেকে $200 কমানো:
𝐴=1000−200=800
A=1000−200=800।
𝐵
B-তে $200 যোগ করা:
𝐵=500+200=700
B=500+200=700।
শেষ অবস্থা (Consistent State):
𝐴=800
A=800, 
𝐵=700
B=700
মোট ব্যালেন্স: 
800+700=1500
800+700=1500।
এটি Consistency রুল নিশ্চিত করে।


<!-- Isolation -->

ekta transaction er upor areakta depend korbe na

ধরুন, একই সময়ে দুটি ট্রানজ্যাকশন চলছে:

T1: অ্যাকাউন্ট A থেকে $500 উত্তোলন করছে।
T2: অ্যাকাউন্ট A এবং অ্যাকাউন্ট B-এর মোট ব্যালেন্স চেক করছে।
প্রারম্ভিক অবস্থা:
অ্যাকাউন্ট A: $1000
অ্যাকাউন্ট B: $2000
মোট ব্যালেন্স: 𝐴+𝐵=1000+2000=3000

বিনা Isolation-এর ক্ষেত্রে:
T1 শুরু হয়:
𝐴=1000−500=500

কিন্তু T1 এখনো সম্পূর্ণ হয়নি। এটি একটি Intermediate State।
T2 শুরু হয়:

T2 অ্যাকাউন্ট A এবং B-এর ব্যালেন্স চেক করে।
𝐴=500
A=500 এবং 
𝐵=2000
B=2000 ধরে মোট ব্যালেন্স হিসাব করে:
500+2000=2500
500+2000=2500
এটি ভুল ফলাফল, কারণ T1 এখনো শেষ হয়নি।
Isolation-এর ক্ষেত্রে:
T1 শুরু হয়:

A-এর ব্যালেন্স থেকে $500 কমানো হয়।
কিন্তু T1 শেষ না হওয়া পর্যন্ত T2 এটি দেখতে পাবে না।
T2 অপেক্ষা করে:

T1 শেষ হলে T2 তার কাজ শুরু করে।
এখন 
𝐴=500
A=500, 
𝐵=2000
B=2000, এবং মোট ব্যালেন্স = 2500।


4. Durablity

Durability (ACID Properties) উদাহরণ
Durability নিশ্চিত করে যে, একবার কোনো ট্রানজ্যাকশন সফলভাবে সম্পন্ন হলে, তার ফলাফল স্থায়ীভাবে ডাটাবেসে সংরক্ষিত হবে। এমনকি সিস্টেম ব্যর্থ হলেও সেই পরিবর্তন হারাবে না।

উদাহরণ: ব্যাংক অ্যাকাউন্টে টাকা স্থানান্তর
দৃশ্যপট:
অ্যাকাউন্ট A: $1000
অ্যাকাউন্ট B: $500
কাজ: অ্যাকাউন্ট A থেকে $200 অ্যাকাউন্ট B-তে স্থানান্তর।

Durability-এর কাজ:
ট্রানজ্যাকশন শুরু:

অ্যাকাউন্ট A থেকে $200 কাটা হয়: 
𝐴=1000−200=800
A=1000−200=800
অ্যাকাউন্ট B-তে $200 যোগ হয়: 
𝐵=500+200=700
B=500+200=700
ট্রানজ্যাকশন সফল:

ডাটাবেস এই পরিবর্তনগুলো স্থায়ীভাবে সংরক্ষণ করে।
সিস্টেম ব্যর্থতা:

যদি ডাটাবেস সার্ভার ক্র্যাশ করে বা বিদ্যুৎ চলে যায়, তবুও 
𝐴=800
A=800 এবং 
𝐵=700
B=700 ডাটাবেসে রয়ে যাবে।


16. User database e transaction and rollback 


17. delete transacetion into  deletestudentintoDb

<!-- 18.  -->

dynamic update Both Primitive and Non Primitive Fields student.services

primitive field means dirrect value in object but non primitive means object in object.

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


  non-primtive local Gurdian Name Gurdian

  we standradly maintain non-primitive field

  we update gurdian field

 first we separate Non-primitive field,

 defeat mutate we must do this

 gurdian.fatherName = mahbub hasan

 we need object call modified data object we store all things

 type Record<string,unknown>

 key ----> string
 value ---> unknown

 so name ke array te convert kori

 object.keys(name) name object array te convert korbe

 object.entries pura Object ke array ke convert kore


Object.keys() output 

["name", "occupation", "contactNo", "address"]


Object.entries() 

[
name: Faruk Ahmed
occupation: Engineer
contactNo: 01933445566
address: 789 Local Street, Dhaka, Bangladesh
]

const keys = Object.keys(localGuardian);
console.log(keys);

const keys = Object.entries(localGuardian);
console.log(keys);

modifiedData emon object hobe jeikhane kono nested object thakbe na

sobgulo hobe

{
  name.firstName,
  name.lastName,
  gender,
  date of birth
}



like this


