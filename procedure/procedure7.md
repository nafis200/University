
<!-- AUthentication + Authoraization -->

<!-- you are allowed or not -->

<!-- Authoriazation admin or student or faculty -->

<!-- bussiness logic -->

first check user exist or not

<!-- USer model er interface and model staistics change -->


<!-- Access Token -->

At first ami token sent korbo.

then jokhon token diye kaj korbo tokhon checking korbo

<!-- ....................................... -->

JWT TOKEN LOOK LIKE

HEADER  ----> PAYLOAD ----> SIGNATURE

first two method visible in client side but not third

jsonWebtoken er maddome amra token create korte pari.

SO work at auth.services.

login function jwt Create function e call kori

login theke jwt token sent kore diyechi.

create auth.ts middleware


Now call auth.ts() from any middlware

and it is final khela

<!-- index.d.ts --> ei file create korte all error gone.


requiredRoles e ache kina role ta??????

user model e password pabo na karon select 0 korechi now User.findOne({id}).select('password')

i need extra information so give +++

user model e password pabo na karon select 0 korechi now User.findOne({id}).select('+password')


<!-- change password -->

password patiyecho eitake decode kore user er id ene change korte hobe.

So Auth bosate hobe route na hole token koi theke asbe


<!-- Road map -->

token sent user

auth.ts e je token asbe take verify korte hobe ebong token token dewar somoy tar neccesary details ami diye dichilam oita diye check korbo



<!--  -->

passowrd change hole token change korte hobe.

user interface and model change kore feli

user model e millisecond e convert korte hobe.

<!-- create refresh token and sent it To Client -->

Auth.utils e ekta function nibo jeikhane reuse kora jay CreateToken name ekta function create korbo.

<!-- very very importment -->

auth controller e refreshtoken ke cookie te sent korte hobe.


App.ts cookie-parser lagbe.

getAllFaculties e console.log(req.cookie) theke refreshToken e niye aste hobe.

Auth.route e refreshToken e hit korte hobe.

refresh token 5 min por por sent korbe autmatic.

auth validation e check korbo cookie diye instead of body.

and Name dibo refreshToken / nafis

Validate Request file ----> middleware e ache oita parse korte hobe.



<!-- refreshtoken automatic jabe na route e hit korle then jabe. -->





