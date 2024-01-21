let diapositivaIndex = 1;

muestraDiapositiva(diapositivaIndex);

function muestraDiapositiva(numero) {
  let diapositivas = document.getElementsByClassName("slideshow__slide");
  let puntos = document.getElementsByClassName("puntos__punto");
  if (numero > diapositivas.length) {
    diapositivaIndex = 1;
  }
  if (numero < 1) {
    diapositivaIndex = diapositivas.length;
  }

  for (let i = 0; i < diapositivas.length; i++) {
    diapositivas[i].style.display = "none";
  }

  for (let i = 0; i < puntos.length; i++) {
    puntos[i].classList.remove("activo");
  }

  diapositivas[diapositivaIndex - 1].style.display = "flex";
  puntos[diapositivaIndex - 1].classList.add("activo");
}

function handleEvents() {
  let siguiente = document.getElementById("next");
  let previo = document.getElementById("prev");
  siguiente.addEventListener("click", siguienteDiapositiva);
  previo.addEventListener("click", anteriorDiapositiva);

  let puntos = document.getElementsByClassName("puntos__punto");

  for (let i = 0; i < puntos.length; i++) {
    puntos[i].addEventListener("click", saltaDiapositiva);
  }
}

function saltaDiapositiva(e) {
  let numero = parseInt(e.target.innerText);
  diapositivaIndex = numero;
  muestraDiapositiva(diapositivaIndex);
}

function siguienteDiapositiva() {
  diapositivaIndex = diapositivaIndex + 1;
  muestraDiapositiva(diapositivaIndex);
}

function anteriorDiapositiva() {
  diapositivaIndex = diapositivaIndex - 1;
  muestraDiapositiva(diapositivaIndex);
}

window.onload = handleEvents;
