/*
let user = getUser()

if(localStorage.getItem("lang") == "ru"){
    if(user["role"] == "admin")[
        document.querySelector(".login_label").textContent += "администратор"
    ]
    else{
        document.querySelector(".login_label").textContent += "пользователь"
    }
}
else{
    document.querySelector(".login_label").textContent += user["role"]
}

document.querySelector("#fname").textContent = user["firstName"]
document.querySelector("#mname").textContent = user["middleName"]
document.querySelector("#lname").textContent = user["lastName"]
document.querySelector("#email").textContent += user["email"]
document.querySelector("#phoneNum").textContent += user["phoneNum"]
document.querySelector("#birthDate").textContent += user["birthDate"]

document.querySelector(".sign_out").addEventListener("click", () => {
    logout()
    window.location.replace("../index.html")
})
*/
var usersArray = JSON.parse(localStorage.getItem("usersData"));
function getUser(){
    console.log(usersArray)
    return usersArray[localStorage.getItem('currUserId')];
}

// Retrieve user information
let user = getUser();

// Update login label based on user role and language
if (localStorage.getItem("language") == "ru") {
    if (user["role"] == "admin") {
        document.querySelector(".login_label").textContent += "администратор";
    } else {
        document.querySelector(".login_label").textContent += "пользователь";
    }
} else {
    document.querySelector(".login_label").textContent += user["role"];
}

// Display user information in the form
document.querySelector("#fname").textContent = user["name"];
document.querySelector("#mname").textContent = user["surname"];
document.querySelector("#lname").textContent = user["patronymic"];
document.querySelector("#email").textContent += user["eMail"];
document.querySelector("#phoneNum").textContent += user["phone"];
document.querySelector("#birthDate").textContent += user["birthDate"];