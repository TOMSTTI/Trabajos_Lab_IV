
let container = document.getElementById('container');
let boton = document.getElementById('boton');


function crearCard(data) {
  let datos = "";
  for (let i = 0; i < data.length; i++) {
    datos += `
      <div class="card">
        <p class="nombre">${data[i].name}</p>
        <p class="link">${data[i].url}</p>
      </div>`;
  }
  container.innerHTML = datos;
}


function fetchPokemonData() {
  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((res) => res.json())
    .then((data) => {
     
      localStorage.setItem('pokemonData', JSON.stringify(data.results));
      
      crearCard(data.results);
    })
    .catch((error) => {
      console.error("Error al obtener los datos:", error);
    });
}


function data() {
  let storedData = localStorage.getItem('pokemonData');
  if (storedData) {

    let datos = JSON.parse(storedData);
    crearCard(datos);
  } else {
   
    fetchPokemonData();
  }
}


boton.addEventListener('click', data);
