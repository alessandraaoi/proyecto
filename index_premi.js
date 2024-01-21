function handleEvents() {
  let buttons = document.querySelectorAll(".nav__link");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", showTab);
  }
}

function showTab(e) {
  let divs__tab = document.querySelectorAll(".panel");
  for (let i = 0; i < divs__tab.length; i++) {
    divs__tab[i].style.display = "none";
  }

  let button = e.target;

  for (let i = 0; i < divs__tab.length; i++) {
    if (button.innerText === divs__tab[i].id) {
      divs__tab[i].style.display = "block";
    }
  }
}

window.onload = handleEvents; // Cuando pase el evento 'onload' al terminar de la carga dela ventana, se ejecuta la función 'handleEvents'
