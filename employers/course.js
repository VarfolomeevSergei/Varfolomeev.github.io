const sectionFourButtons = document.querySelectorAll(".section-four-button");

sectionFourButtons.forEach(button => {
  button.addEventListener("click", function () {
    if (localStorage.getItem("currUser") !== "guest") {
      alert("Вы успешно записались на курс!");
    } else {
      alert("Для записи на курс, пожалуйста, войдите в систему.");
    }
  });
});