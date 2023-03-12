// Establecer el elemento de mantenimiento y agregarle estilo
var mantenimientoElement = document.getElementById("mantenimiento");
mantenimientoElement.style.fontSize = "30px";
mantenimientoElement.style.position = "relative";
mantenimientoElement.style.top = "300px";
mantenimientoElement.style.left = "250px";

// Establecer los arrays de servidores y proceso
var Servidores = ["Activos Actualmente", "Funcion pesada", "en mantenimiento"];
var Proceso = ["Gestion pesada", "Gestion normal", "Gestion Activa"];

// Establecer el elemento de estado de servidores y agregarle estilo
var estadoServidoresElement = document.getElementById("estado-servidores");
estadoServidoresElement.style.fontSize = "30px";
estadoServidoresElement.style.position = "relative";
estadoServidoresElement.style.top = "300px";
estadoServidoresElement.style.left = "600px";

// Agregar una función para mover el elemento "Gestion Activa" condicionalmente
function moverGestionActiva(direccion) {
  var gestionActivaElement = document.querySelector("#proceso:nth-child(3)");
  gestionActivaElement.style.position = "relative";
  if (direccion === "derecha") {
    gestionActivaElement.style.left = "660px";
  } else {
    gestionActivaElement.style.left = "0px";
  }
}

// Agregar un evento que se activa cuando se hace clic en el botón "Mover a la derecha"
document.getElementById("mover-derecha").addEventListener("click", function() {
  moverGestionActiva("derecha");
});

// Agregar un evento que se activa cuando se hace clic en el botón "Mover a la izquierda"
document.getElementById("mover-izquierda").addEventListener("click", function() {
  moverGestionActiva("izquierda");
});

// Agregar una función para actualizar el estado de los servidores según un número aleatorio
function actualizarServidores() {
  var estadoAleatorio = Math.floor(Math.random() * Servidores.length);
  var estadoServidor = Servidores[estadoAleatorio];
  estadoServidoresElement.innerHTML = estadoServidor;
  if (estadoServidor === "en mantenimiento") {
    mantenimientoElement.style.display = "block";
  } else {
    mantenimientoElement.style.display = "none";
  }
}

// Agregar un intervalo que actualiza el estado de los servidores cada 3 segundos
setInterval(actualizarServidores, 3000);


// Establecer el elemento de estado de los servidores
var estadoServidoresElement = document.getElementById("estado-servidores");

// Agregar una función para actualizar el estado de los servidores
function actualizarServidores() {
  // Seleccionar un estado aleatorio de los servidores
  var estadoAleatorio = Math.floor(Math.random() * Servidores.length);
  var estadoServidor = Servidores[estadoAleatorio];

  // Desvanecer el estado anterior y mostrar el nuevo estado
  estadoServidoresElement.classList.add("fade-out");
  setTimeout(function() {
    estadoServidoresElement.innerHTML = estadoServidor;
    estadoServidoresElement.classList.remove("fade-out");
  }, 500); // esperar medio segundo antes de mostrar el nuevo estado
}

// Agregar un intervalo que actualiza el estado de los servidores cada 3 segundos
setInterval(actualizarServidores, 3000);
