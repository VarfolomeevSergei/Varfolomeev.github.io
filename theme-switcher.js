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
  