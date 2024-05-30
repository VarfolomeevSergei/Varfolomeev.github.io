/*document.getElementById('themeToggle').addEventListener('click',function(){
    const currentTheme = document.body.className;
    if (currentTheme==='dark-theme'){
    document.body.className = 'light-theme';
    document.className.className = 'light-theme';
    }else
    {
    document.body.className ='dark-theme';
    document.className.className ='dark-theme';
    }
  });
  */



  
  var btn = document.getElementById("themeToggle");
  var link = document.getElementById("theme-link");
  
  btn.addEventListener("click", function () { ChangeTheme(); });
  
  function ChangeTheme()
  {
      let lightTheme = "style.css";
      let darkTheme = "dark.css";
  
      var currTheme = link.getAttribute("href");
      var theme = "";
  
      if(currTheme == lightTheme)
      {
          currTheme = darkTheme;
          theme = "dark";
      }
      else
      {    
          currTheme = lightTheme;
          theme = "style";
      }
  
      link.setAttribute("href", currTheme);
  
  }