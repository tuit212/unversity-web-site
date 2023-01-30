
const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".wrappers__login");

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

singUp.addEventListener("click", (e) => {
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

    if(singUpObj.password === singUpObj.truePassword && singUpObj.password.length > 6){
        loginArr.push(singUpObj)
        alert('siz muvvaqiyatli kirding')
        container.classList.remove("right-panel-active");
    }  
    else {
        alert('parolingni uzinligi 6 ta dan kup buliwi kerak yoki parolni tug\'ri kiriting')
    }
    console.log(loginArr);
}


const login = document.getElementById('login');

login.addEventListener('click', (e) => {
     e.preventDefault();
     
     console.log("as");

     loginNewArr();
});

function loginNewArr(){

    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');

    const loginEmailValue = loginEmail.value;
    const loginPasswordValue = loginPassword.value;

    let loginObject = {
        loginEmaill: loginEmailValue,
        loginPasswordd: loginPasswordValue,
    }

    for (let i = 0 ; i < loginArr.length; i++) {

        if (loginArr[i].email === loginObject.loginEmaill && loginArr[i].password === loginObject.loginPasswordd) {
            window.location.href = "profil.html"
        }else if(loginObject.loginEmaill === "" && loginObject.loginPasswordd === ""){
            container.classList.add("right-panel-active");
            alert("Please enter");
        } else {
            alert("password yoki email tekshiring ....");
        }
    }
}




