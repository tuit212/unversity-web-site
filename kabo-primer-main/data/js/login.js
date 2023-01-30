
const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());



const loginArr = []

const  singUp = document.getElementById("singUp");

singUp.addEventListener("submit", (e) => {
    e.preventDefault();

    signUp();

}); 


function signUp(){
    const inputName = document.getElementById("inputName");
    const inputFamiliya = document.getElementById("inputFamiliya");
    const inputEmail = document.getElementById("inputEmail");
    const inputPassword = document.getElementById("inputPassword");
    const inputTruePassword = document.getElementById("inputTruePassword");


    const userName = inputName.value;
    const userFamiliya = inputFamiliya.value;
    const userEmail = inputEmail.value;
    const userPassword = inputPassword.value;
    const userTruePassword = inputTruePassword.value;

    let singUpObj = {
        name: userName,
        fullName: userFamiliya,
        email: userEmail,
        password: userPassword,
        truePassword: userTruePassword,
    };

    const dataBase = singUpObj

    console.log(dataBase);
}





//     let signIn = document.getElementById(`signinBtn`);
//     // signIn.style.display="none";

//     function signUp (){
//     let title = document.querySelector("#title");
//     let signUp = document.querySelector("#signupBtn");
//     let signIn = document.querySelector("#signinBtn");
//     let userName = document.querySelector(".userName");
//     let password = document.querySelector(".password");
//     let email = document.querySelector(".email");
//     let passswordNone = document.querySelector(".passswordNone");
//     let treyPassword = document.querySelector(".treypassword");
    
   
//     let user = userName.value;
//     let emal = email.value;
//     let pass = password.value;
//     let treyPass = treyPassword.value;
    
   
//     let  loginObj = {
//         name:user,
//         emaill:emal,
//         password:pass,
//         treyPassword:treyPass,
//     }



//         if(loginObj.name && loginObj.emaill && loginObj.password && loginObj.treyPassword) {


//             const isPassTrue = loginObj.treyPassword === loginObj.password 


//             if(isPassTrue) {
//                 loginArr.push(loginObj)
//                 alert("Siz muvaffaqiyatli tizimga kirdingiz")
//                 title.textContent = 'Login';
//                 signUp.style.display = 'none';
//                 signIn.style.display= "block";
//                 treyPassword.style.display = 'none';
//                 passswordNone.style.display = 'none';
//             }else{
//                 alert("email yoki parolni tekshiring... ")
//             }

        
//         }else{
//             alert("to'diring ....")
//         }
    
    

    
//     console.log(loginArr);
    

// };




// function login () {

//     let users = document.querySelector('.userName');
//     let psw = document.querySelector('.password');
//     // console.log(users);


//     const sign = {
//         name:users.value,
//         password:psw.value,
//     }
//     console.log(sign); 

//   for(let i = 0; i < loginArr.length; i++){

      
//       if(loginArr[0].name != sign.name || loginArr[0].password != sign.password){
//         alert(`tekshering tekshiring`)
//       }else{
//         alert(`Websaytga xush kelibsiz`)

//         window.location.href = "index.html"
//       }

//     }
// }