function handleEvents() {
  // Utilizo el metodo document.getElementById para definir:
  let buttonAbrir = document.getElementById("buttonAbrir");
  let buttonCerrar = document.getElementById("buttonCerrar");
  buttonAbrir.addEventListener("click", handleOpen);
  buttonCerrar.addEventListener("click", handleClose);
}

// Cada vez que hago click en el botón 'button', añado y quito las clases para mostrar y esconder el menu

function handleOpen() {
  document.querySelector(".nav__list").style.display = "block";
  document.querySelector(".nav__list").style.width = "16rem";
  document.querySelector("#buttonAbrir").style.display = "none";
}

function handleClose() {
  document.querySelector(".nav__list").style.display = "none";
  document.querySelector(".nav__list").style.width = "0rem";
  document.querySelector("#buttonAbrir").style.display = "block";
}

window.onload = handleEvents; // Cuando pase el evento 'onload' al terminar de la carga dela ventana, se ejecuta la función 'handleEvents'
