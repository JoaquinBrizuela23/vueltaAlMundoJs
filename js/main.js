
let viajes = [
    {
        id: 1, nombre: "Bariloche", descripcion: "San Carlos de Bariloche (comúnmente llamada Bariloche) es una ciudad en la región de la Patagonia argentina. Limita con Nahuel Huapi, un gran lago glacial rodeado de montañas de los Andes. Bariloche es conocida por su arquitectura al estilo alpino de Suiza y su chocolate, que se vende en tiendas de la calle Mitre, la avenida principal. También es una base popular para el excursionismo y el esquí en las montañas cercanas, y para explorar los alrededores del Distrito de los Lagos." , precio: 32000, imagen: "./img/bariloche.png",
    },
    {
        id: 2, nombre: "Brasil",  descripcion: "Brasil es un vasto país de Sudamérica que se extiende desde la Cuenca del Amazonas en el norte hasta los viñedos y las enormes cataratas del Iguazú en el sur. Río de Janeiro, simbolizado por su estatua de 38 m del Cristo Redentor sobre el cerro del Corcovado, es famoso por sus ajetreadas playas Copacabana e Ipanema, junto con su enorme y estridente festival del Carnaval, que cuenta con carros alegóricos, exuberantes disfraces y danza y música samba.", precio: 50000, imagen: "./img/brasil.png",
    },
    {
        id: 3, nombre: "Jujuy",  descripcion: "San Salvador de Jujuy es una ciudad del noroeste de Argentina, cabecera del departamento Doctor Manuel Belgrano y capital y ciudad más poblada de la provincia de Jujuy." , precio: 40000, imagen: "./img/jujuy.png",
    },
    {
        id: 4, nombre: "Córdoba",  descripcion:"Córdoba, la capital de la provincia argentina del mismo nombre, es conocida por su arquitectura colonial española. Alberga la Manzana Jesuítica, un complejo del siglo XVII con claustros activos, iglesias y el campus original de la Universidad Nacional de Córdoba, una de las universidades más antiguas de Sudamérica. El punto central de la ciudad es la Plaza San Martín y la Catedral de Córdoba de estilo neobarroco. " , precio: 30000, imagen: "./img/cordoba.png",
    },
];

let contenedor = document.getElementById("container");
contenedor.innerHTML = "";
viajes.forEach( (viaje) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <img class="card-img-top" src="${viaje.imagen}" alt="Card image">
    <div class="card-img-overlay-shadow">
      <h4 class="card-title">${viaje.nombre}</h4>
      <p class="card-text">${viaje.descripcion}</p>
      <p class="card-text"> $ ${viaje.precio}</p>
      <a href="#" class="btn">Contratar</a>
    </div>
  </div>`;
    contenedor.appendChild(card);
    });

const formulario = document.getElementById("form");
formulario.addEventListener("submit", function(e){
    e.preventDefault();
    let mail = document.getElementById("exampleInputEmail1").value
})

const btn = document.getElementById("btn")
btn.addEventListener("click", () => {
  Swal.fire({
    icon: 'success',
    title: 'Perfecto',
    text: 'Tu correo electronico ha sido enviado correctamente',
  })
})

var nav = document.getElementById('navbar');

      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {
          nav.classList.add('bg-dark', 'shadow');
        } else {
          nav.classList.remove('bg-dark', 'shadow');
        }
      });
