let btnNav = document.querySelector(".navbar-toggler")
let login = document.querySelector(".login")
let username = document.getElementById("username")
let LogOut = document.getElementById("LogOut")


btnNav.addEventListener("click", function () {
    login.classList.toggle("d-block")

})

let contener = []
let index = null

if (JSON.parse(localStorage.getItem("project")) != null) {
    contener = JSON.parse(localStorage.getItem("project"))
}
else {
    window.open("index.html", "_self")
}
if (JSON.parse(localStorage.getItem("index")) != null) {
    index = JSON.parse(localStorage.getItem("index"))
    username.textContent = `WellCome ${contener[index].name}` }
    

else {
    window.open("index.html", "_self")
}


LogOut.addEventListener("click", function () {
    localStorage.setItem("index", null)
    window.open("index.html", "_self", "", false)
})


