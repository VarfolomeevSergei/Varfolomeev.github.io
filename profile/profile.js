/*
var usersArray = JSON.parse(localStorage.getItem("usersData"));
function getUser(){
    console.log(usersArray)
    return usersArray[localStorage.getItem('currUserId')];
}

let user = getUser();

if (localStorage.getItem("language") == "ru") {
    if (user["role"] == "admin") {
        document.querySelector(".login_label").textContent += "администратор";
    } else {
        document.querySelector(".login_label").textContent += "пользователь";
    }
} else {
    document.querySelector(".login_label").textContent += user["role"];
}

document.querySelector("#fname").textContent = user["name"];
document.querySelector("#mname").textContent = user["surname"];
document.querySelector("#lname").textContent = user["patronymic"];
document.querySelector("#email").textContent += user["eMail"];
document.querySelector("#phoneNum").textContent += user["phone"];
document.querySelector("#birthDate").textContent += user["birthDate"];
*/

var usersArray = JSON.parse(localStorage.getItem("usersData"));

function getUser() {
  console.log(usersArray);
  return usersArray[localStorage.getItem("currUserId")];
}

let user = getUser();

if (localStorage.getItem("language") == "ru") {
  if (user["role"] == "admin") {
    document.querySelector(".login_label").textContent += "администратор";
  } else if (user["role"] != undefined) { // Проверка на undefined
    document.querySelector(".login_label").textContent += "пользователь";
  }
} else {
  if (user["role"] != undefined) { // Проверка на undefined
    document.querySelector(".login_label").textContent += user["role"];
  }
}

if (user["name"] != undefined) { // Проверка на undefined
  document.querySelector("#fname").textContent = user["name"];
}
if (user["surname"] != undefined) { // Проверка на undefined
  document.querySelector("#mname").textContent = user["surname"];
}
if (user["patronymic"] != undefined) { // Проверка на undefined
  document.querySelector("#lname").textContent = user["patronymic"];
}
if (user["eMail"] != undefined) { // Проверка на undefined
  document.querySelector("#email").textContent += user["eMail"];
}
if (user["phone"] != undefined) { // Проверка на undefined
  document.querySelector("#phoneNum").textContent += user["phone"];
}
if (user["birthDate"] != undefined) { // Проверка на undefined
  document.querySelector("#birthDate").textContent += user["birthDate"];
}