import { darkThemeSetup } from "../registration/dark-theme.js";
const usersDataPath = 'users.json';

const signUpButton = document.getElementById("sign-up-button");
const signInButton = document.getElementById("sign-in-button");
const signUp = document.querySelector(".sign-up")
const signIn = document.querySelector(".sign-in")
const signUpForm = document.querySelector(".sign-up form")
const signInForm = document.querySelector(".sign-in form")

  signUpButton.addEventListener("click", function(){
    signIn.classList.add("hidden");
    signUp.classList.remove("hidden");
});

signInButton.addEventListener('click', function(){
    signUp.classList.add('hidden');
    signIn.classList.remove('hidden');
});

async function getUsersData(){
    try {
        const response = await fetch(usersDataPath);
        if (!response.ok) {
          throw new Error('Error on loading JSON file');
        }
        const data = await response.json();
    
        let roles = [];
        let logins = [];
        let passwords = [];
    
        data.forEach(item => {
            roles.push(item.role);
            logins.push(item.login);
            passwords.push(item.password);
        });
    
        return { roles, logins, passwords };
    } catch (error) {
        console.error('Error:', error);
    }
}

signInForm.addEventListener('submit', async function(event) {
    event.preventDefault(); 
    const signInData = new FormData(signInForm);
    const login = signInData.get('login');
    const password = signInData.get('password');

    const usersData = await getUsersData();
    let numberOfUser = -1;

    for(let i = 0; i < usersData.logins.length; i++ ){
        if((usersData.logins[i] === login) && (usersData.passwords[i] === password)){
            numberOfUser = i;
            break;
        }
    }
    if(numberOfUser != -1){
        alert('Hello, ' + usersData.roles[numberOfUser]);
    } else {
        alert('Invalid login or password');
    }
    signInForm.reset();
});

function checkMatches(item, items){
    for(let i = 0; i < items.length; i++ ){
        if(items[i] === item){
            return true;
        }
    }
    return false;
}

signUpForm.addEventListener('submit', async function(event) {
    event.preventDefault(); 
    const signUpData = new FormData(signUpForm);
    const phone = signUpData.get('phone');
    const login = signUpData.get('create-login');
    const password = signUpData.get('create-password');
    const confirmPassword = signUpData.get('confirm-password');

    const usersData = await getUsersData();

    if(phone.length != 13 || phone.length != 12){
        alert('Error: phone number isn\'t correct');
        return;
    }
    if(!phone.startsWith("+375") && !phone.startsWith("375")){
        alert('Error: phone number isn\'t Belarusian number');
        return;
    }

    if(checkMatches(login, usersData.logins)){
        alert('Error: this login already exists, try another one');
        isFormValid = false;
    }

    //                    phone 
    //                    email 
    //                    birth-date •ввод даты рождения пользователя. Предусмотреть, что клиентом магазина может быть пользователь, которому уже исполнилось 16 лет;

    //                    name 
    //                    surname 
    //                    patronymic 

    if(numberOfUser != -1){
        alert('Hello, ' + usersData.roles[numberOfUser]);
    } else {
        alert('Invalid login or password');
    }
    signInForm.reset();
});

async function main(){
    darkThemeSetup();
}

main();

