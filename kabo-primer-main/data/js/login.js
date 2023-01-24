

let loginSection = document.querySelector(".login-section"),
    singinHeader = document.querySelector(".singin header");
    loginHeader = document.querySelector(".login header");


loginHeader.addEventListener("click", () => {
    loginSection.classList.add("active-login");
});

singinHeader.addEventListener("click", () => {
    loginSection.classList.remove("active-login");
});