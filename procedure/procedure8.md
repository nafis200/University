
<!-- Forget and Reset password -->

1. auth.services e forget password er kaj kori

<!-- fronted e mir vai ekta error kheyechilo expire token error its solve createToken at auth.utils file e  -->

2. User model e change kore feli, email add kori

3. User services e email add kori admin student faculty services beacuse of email er maddome sent korte hobe forget password.

4. user model and interface for photo url

5. utils e sendEmail.tsx create kori.

6. set email for nodemailer

7. forget password e hit korle se token patabe and reset password route e niye jabe.
oijagay id and newPassword dite hobe.


<!-- We Need Me EndPoints -->

8. getMe route is User services and student id.

9. getMe route why needed beacuse amar route ami nije dekbo.

10. getMe de 2 times verify hocche auth e ekbar hocche abar userServices getMe e korche so getMe n dileo colbe

<!-- very very important -->

11. req.user e amra token soho all information set kore rakchi auth.ts e middleware-----> auth.ts e When we login every Time we set it. 



<!-- Install Multer, Cloudinary And uploaded  -->


12. Open Cloudinary account email.

13. sendImageToCloudinary.ts e kaj kori.

14. Call it from user.services sendImageToCloudinary() function.

15. We need secure url from cloudinary.

16. uploads name ekta folder create kori root file e.

17. file sent korte gele from data te sent korte hobe.

18. but eita controller pabe na so we use multer.

19. multer use kore parse kore uploads folder e rakbo.

<!-- process -->
            sent         hit
file + data ----> server ---> create-admin  ----> server store temporary -----> hits imageDB/Cloudinary-----> provide image_url ---> store into mongodb database ---> delete temporary upload save.

20. Controller e jawar age multer er maddome parse korte hobe.


21. postman theke text akare data asbe so json niye jete hobe.

22. user.route upload er pore validate request json data sent korte hobe so create middleware.

23. upload.single('file'), parse korche then sent it middleware to convert text data to json data









