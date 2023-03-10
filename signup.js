let signupName = document.getElementById("signupName");
let signupEmail = document.getElementById("signupEmail");
let signupPassword = document.getElementById("signupPassword");
let btnSignin = document.querySelector(".btnSignin");
let signupNameValue = "";
let signupEmailValue = "";
let signupPasswordValue = "";
let nameError = document.getElementById("nameError");
let EmailError = document.getElementById("EmailError");
let paswrdError = document.getElementById("paswrdError");
let contener = [];
let RegxName = /^[\w\s]{4,20}$/;
let RegxEmail = /^[\w]{4,10}@(yahoo||gmail).com$/;
let RegxPass = /[\w]{8,20}/;
let conter = "";
signupName.addEventListener("input", function () {
  if (RegxName.test(signupName.value)) {
    nameError.textContent = "Completed";
  } else {
    nameError.textContent = "Pless Enter 4 Letters or More";
  }
  nameError.classList.replace("d-none", "d-block");
});
signupEmail.addEventListener("input", function () {
  if (RegxEmail.test(signupEmail.value)) {
    EmailError.textContent = "Completed";
  } else {
    EmailError.textContent = "Pless Enter Email";
  }
  EmailError.classList.replace("d-none", "d-block");
});
signupPassword.addEventListener("input", function () {
  if (RegxPass.test(signupPassword.value)) {
    paswrdError.textContent = "Completed";
  } else {
    paswrdError.textContent = "Pless Enter 8 Letters or More";
  }
  paswrdError.classList.replace("d-none", "d-block");
});
btnSignin.addEventListener("click", function (e) {
  signupNameValue = signupName.value;
  signupEmailValue = signupEmail.value;
  signupPasswordValue = signupPassword.value;
  if (
    RegxName.test(signupName.value) &&
    RegxEmail.test(signupEmail.value) &&
    RegxPass.test(signupPassword.value)
  ) {
    let User = {
      name: signupNameValue,
      Email: signupEmailValue,
      passwrod: signupPasswordValue,
    };
    if (JSON.parse(localStorage.getItem("project"))!=null) {
      for (let i = 0; i < contener.length; i++) {
        if (signupEmail.value===contener[i].Email) {
            EmailError.textContent="Email Is Uesd"
          
          RegxEmail.test(signupEmail.value)=false
        }
        
      }
    }
    contener.push(User)    
    localStorage.setItem("project", JSON.stringify(contener));
    cleerInput()
    window.open("index.html", "_self");
  }else{
    if (RegxName.test(signupName.value)) {
      nameError.textContent = "Completed";
    } else {
      nameError.textContent = "Name is Valed";
    }
    if(RegxEmail.test(signupEmail.value)==false){
      EmailError.textContent="Email Is Valed"
    }else{
      EmailError.textContent = "Completed";}
    if (RegxPass.test(signupPassword.value)) {
      paswrdError.textContent = "Completed";
    } else {
      paswrdError.textContent = "Pless is Valed";
    }
  }
});
if (JSON.parse(localStorage.getItem("project") != null)) {
  contener = JSON.parse(localStorage.getItem("project"));
}
function cleerInput() {
signupNameValue = "";
signupEmailValue = "";
signupPasswordValue = "";}
if(JSON.parse(localStorage.getItem("index")) == null  ){
        
}else{window.open("home.html","_self")}

