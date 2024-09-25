
const apiUrl = 'https://hp-api.onrender.com/api/characters';
const defaultImage = 'https://via.placeholder.com/150x200?text=No+Image';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const charactersContainer = document.getElementById('charactersContainer');

        data.forEach(character => {
            const characterDiv = document.createElement('div');
            characterDiv.classList.add('character');

            // Crear elementos para nombre, imagen y casa!
            const characterName = document.createElement('h2');
            characterName.textContent = character.name;

            const characterImage = document.createElement('img');
            characterImage.src = character.image ? character.image : defaultImage;

            const characterHouse = document.createElement('p');
            characterHouse.textContent = character.house ? `Casa: ${character.house}` : 'Casa: Desconocida';

            // Añadir los elementos al div del personaje!
            characterDiv.appendChild(characterName);
            characterDiv.appendChild(characterImage);
            characterDiv.appendChild(characterHouse);

            // Añadir el div del personaje al contenedor!
            charactersContainer.appendChild(characterDiv);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
