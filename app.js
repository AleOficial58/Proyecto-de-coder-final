const stockProductos = [
  {
    id: 1,
    nombre: "The Last Of Us 2",
    cantidad: 1,
    desc: "The Last of Us Part II es un videojuego de terror y de acción y aventuras de 2020 desarrollado por Naughty Dog y publicado por Sony Interactive Entertainment para PlayStation 4.",
    precio: 15200,
    img: "img/last.jpg" ,
  },
  {
    id: 2,
    nombre: "Elden ring",
    cantidad: 1,
    desc: "Elden ring, juego salido hace unos meses, recientemente nuevo",
    precio: 17400,
    img: "img/eldenring.jpg",
  },
  {
    id: 3,
    nombre: "Pac Man",
    cantidad: 1,
    desc: "Pac-Man es una franquicia de videojuegos japonesa desarrollada, publicada y propiedad de Bandai Namco Entertainment, un editor de videojuegos que anteriormente se conocía como Namco",
    precio: 9570,
    img: "img/pacman.jpg",
  },
  {
    id: 4,
    nombre: "God of war: ragnarok",
    cantidad: 1,
    desc: "God of War Ragnarök es un videojuego de acción y aventuras desarrollado por Santa Monica Studio y publicado por Sony Interactive Entertainment. Se lanzó en todo el mundo el 9 de noviembre de 2022 para PlayStation 4 y PlayStation 5, lo que marca el primer lanzamiento entre generaciones de la serie.",
    precio: 23000,
    img: "img/ragnarok.jpg",
  },
  {
    id: 5,
    nombre: "Hogwarts Legacy",
    cantidad: 1,
    desc: "Hogwarts Legacy es un juego de rol de acción de 2023 desarrollado por Avalanche Software y publicado por Warner Bros. Games bajo su sello Portkey Games. El juego está ambientado en el universo Wizarding World, basado en las novelas de Harry Potter, y fue lanzado para PlayStation 5, Windows y Xbox Series X/S en 2023.",
    precio: 33200,
    img: "img/hogwarts.jpg",
  },
  {
    id: 6,
    nombre: "Returnal",
    cantidad: 1,
    desc: "Returnal es un videojuego de disparos en tercera persona roguelike, desarrollado por Housemarque y publicado por Sony Interactive Entertainment. Se estrenó exclusivamente para la consola PlayStation 5 el 30 de abril de 2021.",
    precio: 9200,
    img: "img/RETURNAL.jfif",
  },
  {
    id: 7,
    nombre: "League of Legends",
    cantidad: 1,
    desc: "League of Legends, es un videojuego multijugador de arena de batalla en línea desarrollado y publicado por Riot Games. Inspirándose en Defense of the Ancients, un mapa personalizado para Warcraft III, los fundadores de Riot buscaron desarrollar un juego independiente del mismo género. ",
    precio: 7400,
    img: "img/league.jpg",
  },
  {
    id: 8,
    nombre: "Call Of Duty Warzone",
    cantidad: 1,
    desc: "Call of Duty: Warzone es un videojuego de disparos en primera persona, perteneciente al género Battle royale gratuito, lanzado el 10 de marzo de 2020 para PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S y Microsoft Windows.",
    precio: 8200,
    img: "img/callduty.jpg",
  },
  {
    id: 9,
    nombre: "Fifa 2019",
    cantidad: 1,
    desc: "FIFA 19 es un videojuego de simulación de fútbol desarrollado por EA Vancouver y EA Rumania, ayudando también en su desarrollo está también EA España y EA Holanda, como parte de la serie FIFA de Electronic Arts",
    precio: 6400,
    img: "img/fifa.jpg",
  },
  {
    id: 10,
    nombre: "Fornite",
    cantidad: 1,
    desc: "Fortnite es un videojuego del año 2017 desarrollado por la empresa Epic Games lanzado como diferentes paquetes de software que presentan diferentes modos de juego, pero que comparten el mismo motor de juego y mecánicas. Fue anunciado en los premios Spike Video Game Awards en 2011.",
    precio: 5200,
    img: "img/fornite.jpg",
  },
  {
    id: 11,
    nombre: "Far Cry 6",
    cantidad: 1,
    desc: "Fortnite es un videojuego del año 2017 desarrollado por la empresa Epic Games lanzado como diferentes paquetes de software que presentan diferentes modos de juego, pero que comparten el mismo motor de juego y mecánicas. Fue anunciado en los premios Spike Video Game Awards en 2011.",
    precio: 22200,
    img: "img/farcry6.jpg",
  },
];
let carrito = [];

const contenedor = document.querySelector("#contenedor");
const carritoContenedor = document.querySelector("#carritoContenedor");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
const activarFuncion = document.querySelector("#activarFuncion");
const procesarCompra = document.querySelector("#procesarCompra");
const totalProceso = document.querySelector("#totalProceso");
const formulario = document.querySelector('#procesar-pago')

if (activarFuncion) {
  activarFuncion.addEventListener('click', procesarPedido);
}

document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  mostrarCarrito();
document.querySelector("#activarFuncion").click(procesarPedido);

});
if(formulario){
  formulario.addEventListener('submit', enviarCompra)
}


if (vaciarCarrito) {
  vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
    mostrarCarrito();
  });
}

if (procesarCompra) {
  procesarCompra.addEventListener("click", () => {
    if (carrito.length === 0) {
      Swal.fire({
        title: "¡Tu carrito está vacio!",
        text: "Compra algo para continuar con la compra",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      location.href = "compra.html";
    }
  });
}

stockProductos.forEach((prod) => {
  const { id, nombre, precio, desc, img, cantidad } = prod;
  if (contenedor) {
    contenedor.innerHTML += `
    <div class="card mt-3" style="width: 18rem;">
    <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">Precio: ${precio}</p>
      <p class="card-text">Descripcion: ${desc}</p>
      <p class="card-text">Cantidad: ${cantidad}</p>
      <button class="java2ok" onclick="agregarProducto(${id})">Comprar Producto</button>
    </div>
  </div>
    `;
  }
});


const agregarProducto = (id) => {
  const existe = carrito.some(prod => prod.id === id)

  if(existe){
    const prod = carrito.map(prod => {
      if(prod.id === id){
        prod.cantidad++
      }
    })
  } else {
    const item = stockProductos.find((prod) => prod.id === id)
    carrito.push(item)
  }
  mostrarCarrito()

};

const mostrarCarrito = () => {
  const modalBody = document.querySelector(".modal .modal-body");
  if (modalBody) {
    modalBody.innerHTML = "";
    carrito.forEach((prod) => {
      const { id, nombre, precio, desc, img, cantidad } = prod;
      console.log(modalBody);
      modalBody.innerHTML += `
      <div class="modal-contenedor">
        <div>
        <img class="img-fluid img-carrito" src="${img}"/>
        </div>
        <div>
        <p>Producto: ${nombre}</p>
      <p>Precio: ${precio}</p>
      <p>Cantidad :${cantidad}</p>
      <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
        </div>
      </div>
      
  
      `;
    });
  }

  if (carrito.length === 0) {
    console.log("Nada");
    modalBody.innerHTML = `
    <p class="text-center text-primary parrafo">¡Aun no agregaste nada!</p>
    `;
  } else {
    console.log("Algo");
  }
  carritoContenedor.textContent = carrito.length;

  if (precioTotal) {
    precioTotal.innerText = carrito.reduce(
      (acc, prod) => acc + prod.cantidad * prod.precio,
      0
    );
  }

  guardarStorage();
};

hola = "Bienvenido al Proyecto de JavaScript para Coderhouse";

//alert(hola)

hola2 = "En esta ocacion esta pagina de prueba se incluye (Implementación con uso de JSON y Storage. - Modificación del DOM y detección de eventos de usuario - Codificar funciones de procesos esenciales y notificación de resultados por HTML, añadiendo interacción al simulador -  Ampliar y refinar el flujo de trabajo del script en términos de captura de eventos, procesamiento del simulador y notificación de resultados en forma de salidas por HTML, modificando el DOM - Definir eventos a manejar y su función de respuesta - Modificar el DOM, ya sea para definir elementos al cargar la página o para realizar salidas de un procesamiento - Almacenar datos (clave-valor) en el Storage y recuperarlos)"

//alert(hola2)

function guardarStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function eliminarProducto(id) {
  const juegoId = id;
  carrito = carrito.filter((juego) => juego.id !== juegoId);
  mostrarCarrito();
}
function procesarPedido() {
  carrito.forEach((prod) => {
    const listaCompra = document.querySelector("#lista-compra tbody");
    const { id, nombre, precio, img, cantidad } = prod;
    if (listaCompra) {
      const row = document.createElement("tr");
      row.innerHTML += `
              <td>
              <img class="img-fluid img-carrito" src="${img}"/>
              </td>
              <td>${nombre}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>${precio * cantidad}</td>
            `;
      listaCompra.appendChild(row);
    }
  });
  totalProceso.innerText = carrito.reduce(
    (acc, prod) => acc + prod.cantidad * prod.precio,
    0
  );
}

 function enviarCompra(e){
   e.preventDefault()
   const cliente = document.querySelector('#cliente').value
   const email = document.querySelector('#correo').value

   if(email === '' || cliente == ''){
     Swal.fire({
       title: "¡Debes completar tu email y nombre!",
       text: "Rellena el formulario",
       icon: "error",
       confirmButtonText: "Aceptar",
   })
 } else {

  const btn = document.getElementById('button');

// document.getElementById('procesar-pago')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_qxwi0jn';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Finalizar compra';
      alert('Correo enviado!');
    }, (err) => {
      btn.value = 'Finalizar compra';
      alert(JSON.stringify(err));
    });
    
   const spinner = document.querySelector('#spinner')
   spinner.classList.add('d-flex')
   spinner.classList.remove('d-none')

   setTimeout(() => {
     spinner.classList.remove('d-flex')
     spinner.classList.add('d-none')
     formulario.reset()

     const alertExito = document.createElement('p')
     alertExito.classList.add('alert', 'alerta', 'd-block', 'text-center', 'col-12', 'mt-2', 'alert-success')
     alertExito.textContent = 'Compra realizada correctamente'
     formulario.appendChild(alertExito)

     setTimeout(() => {
       alertExito.remove()
     }, 3000)


   }, 3000)
 }
 localStorage.clear()

 }