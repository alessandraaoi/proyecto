function handleEvents() {
  // Utilizo el metodo document.querySelectorAll para definir: todos los botones del nav
  let link = document.querySelectorAll(".button__nav");

  // A través de un bucle FOR, asigno el evento 'click' a cada uno de los botones del nav. Al pasar el evento, se ejecuta la función 'showPanel'
  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", showPanel);
  }

  // Utilizo el metodo document.getElementById para definir: el boton con icono de menu
  let button = document.getElementById("buttonAbrir");
  // Asigno el evento 'click' al botón con icono de menu. Al pasar el evento, se ejecuta la función 'showMenu'
  button.addEventListener("click", showMenu);
}

// Definición de la función showPanel que toma el evento e como parametro
function showPanel(e) {
  // Utilizo el metodo document.querySelectorAll para definir: el panel
  let panel = document.querySelectorAll(".panel");
  // A través de un bucle FOR, escondo (asigno un display: none) todos los elementos con clase 'panel'
  for (i = 0; i < panel.length; i++) {
    panel[i].style.display = "none";
  }

  // Defino todos los botones del nav como target del evento (click) de mi función 'showPanel'
  let link = e.target;

  for (let i = 0; i < panel.length; i++) {
    // A través de un bucle FOR, muestro todos los panel (asigno un display: block) que cumplan la siguiente condición:
    if (link.innerText === panel[i].id) {
      // Condición: el bucle FOR se ejecuta si el string del boton del nav es igual a la id del panel
      panel[i].style.display = "block";
    }
  }
}

function showMenu() {
  let header = document.getElementById("nav");
  header.classList.toggle("activo");
}

window.onload = handleEvents;
