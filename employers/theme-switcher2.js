var btn = document.getElementById("themeToggle");
var link = document.getElementById("theme-link");
let lightTheme = "style.css";
let darkTheme = "dark.css";

var currTheme = link.getAttribute("href");
darkThemeSetup();
function darkThemeSetup(){
    const data = localStorage.getItem('theme');
    const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

    if(data == null){
        if(prefersDarkTheme.matches){
            localStorage.setItem('theme', 'dark');
            currTheme = darkTheme;
        } else{
            localStorage.setItem('theme', 'light');
            currTheme = lightTheme;
        }
    } else{
        if(data === 'dark'){
            currTheme = darkTheme;
        } else{
            currTheme = lightTheme;
        }
    }
    link.setAttribute("href", currTheme);
}

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme() {
    var theme = "";

    if (currTheme == lightTheme) {
        currTheme = darkTheme;
        theme = "dark";
    }
    else {
        currTheme = lightTheme;
        theme = "light";
    }

    link.setAttribute("href", currTheme);
    localStorage.setItem('theme', theme);
}

// Получаем элементы логотипов
const logoImage1 = document.querySelector('.header-logo-container img:first-child');
const logoImage2 = document.querySelector('.header-logo-container img:last-child');

// Функция для изменения логотипов
function updateLogos() {
  if (currTheme === darkTheme) {
    // Темная тема
    logoImage1.src = '../img/logo-1-white.png';
    logoImage2.src = '../img/logo-2-white.png';
  } else {
    // Светлая тема
    logoImage1.src = '../img/logo-1.png';
    logoImage2.src = '../img/logo-2.png';
  }
}

// Вызываем функцию при загрузке страницы и при переключении темы
window.addEventListener('load', updateLogos);
btn.addEventListener('click', updateLogos);