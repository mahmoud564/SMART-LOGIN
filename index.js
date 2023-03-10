let signinEmail = document.getElementById("signinEmail")
let signinPassword = document.getElementById("signinPassword")
let btnlod = document.querySelector(".btnlod")
let paswrdError = document.getElementById("paswrdError")
let contener = []
if (JSON.parse(localStorage.getItem("project")) != null) {
    contener = JSON.parse(localStorage.getItem("project"))}
    if(JSON.parse(localStorage.getItem("index")) == null  ){}else{window.open("home.html","_self")}
console.log(localStorage.getItem("index"));
console.log(contener);
btnlod.addEventListener("click", function () {
    let signinEmailValue = signinEmail.value
    let signinPasswordVlue = signinPassword.value
    for (let i = 0; i < contener.length; i++) {
        if (signinEmailValue === contener[i].Email && signinPasswordVlue === contener[i].passwrod) {
            localStorage.setItem("index", i)
            window.open("home.html", "_self")
        } else {paswrdError.classList.replace("d-none", "d-block")
        paswrdError.textContent="Email Or Passowerd is Error"
        }}})
                   




