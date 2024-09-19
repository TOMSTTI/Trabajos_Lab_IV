fetch("https://jsonplaceholder.typicode.com/users")
.then( res => res.json())
.then( data => {
  crearCard(data)
});

let container = document.getElementById('container')

function crearCard(data) {
  for (let i = 0; i < data.length; i++) {
    container.innerHTML += `
      <div class="card">
        <p>Nombre: ${data[i].name}</p>
        <p>Usuario: ${data[i].username}</p>
        <p>Email: ${data[i].email}</p>
      </div>`;
  }
}

crearCard()
