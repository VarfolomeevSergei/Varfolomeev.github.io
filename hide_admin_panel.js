//проверка на роль пользователя
async function CheckUser() {
    const data = localStorage.getItem('currUser');
    if(data == "guest")
        {
            document.querySelector(".admin_panel123").classList.add("hidden");
            // document.querySelector().classList.add("hidden");
        }
    if(data == "user")
    {
        
        // document.querySelector().classList.remove("hidden");
        // document.querySelector().classList.add("hidden");
        // document.querySelector().classList.add("hidden");
    }
    else if(data == "admin"){
        document.querySelector(".section-six").classList.remove("hidden");
        document.querySelector(".admin_panel123").classList.remove("hidden");
        // document.querySelector().classList.remove("hidden");
        // document.querySelector().classList.add("hidden");
        // document.querySelector().classList.add("hidden");

    }else {return;}
}
