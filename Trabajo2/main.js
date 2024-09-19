fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data) => {
        console.log(data.results)
        let charac = data.results
        crearCard(charac)
    })

let container = document.getElementById('container')

function crearCard(data) {
    for (let i = 0; i < data.length; i++) {
        container.innerHTML += `
        <div class="card">
            <p>${data[i].name}</p>
            <img src="${data[i].image}">
        </div>`;
    }
}
