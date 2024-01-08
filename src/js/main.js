'use strict';

console.log('>> Ready :)');
//MIDU SALVAME

// EVENTO PARA CARGAR TODOS LOS PERSONAJES

document.addEventListener('DOMContentLoaded', loadCharacters);
const favoriteCharacters = JSON.parse(localStorage.getItem('favoriteCharacters')) || [];;


async function loadCharacters() {
    const apiUrl = '//api.disneyapi.dev/character?pageSize=50';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const disneyCharacters = data.data;

        showCharactersInHTML(disneyCharacters);
    } catch (error) {
        console.error('Error al obtener datos de la API:', error);
    }
}

//CAMBIANDO HTML PARA MOSTRAR LAS CARTAS

function showCharactersInHTML(characters) {
    const container = document.getElementById('disneyCharactersContainer');


    characters.forEach(character => {
        //USO DEL OPERADOR ? PARA SABER SI TIENE IMAGEN, SI NO CARGARA LA ESPECIFICADA EN EL EJERCICIO
        const imageUrl = character.imageUrl ? character.imageUrl : 'https://via.placeholder.com/210x295/ffffff/555555/?text=Disney';
        const characterHTML = `
      <div class="characterCard">
        <h3 class="characterName">${character.name}</h3>
        <img class="characterImage" src="${imageUrl}" alt="${character.name}">
      </div>
    `;
        container.innerHTML += characterHTML;
    });

    const characterCards = document.querySelectorAll('.characterCard');

    characterCards.forEach(card => {
        card.addEventListener('click', () => {
            addToFavorites(card, characters);
        });
    });

}

//FUNCIONES PARA MOSTRAR LOS FAVORITOS


function addToFavorites(card, characters) {
    const characterName = card.querySelector('.characterName').textContent;
    const isAlreadyFavorited = favoriteCharacters.includes(characterName);

    if (!isAlreadyFavorited) {
        favoriteCharacters.push(characterName);

        // Guardar en localStorage
        localStorage.setItem('favoriteCharacters', JSON.stringify(favoriteCharacters));

        const favoriteContainer = document.getElementById('favoriteCharactersContainer');
        const character = characters.find(char => char.name === characterName);
        const imageUrl = character.imageUrl ? character.imageUrl : 'https://via.placeholder.com/210x295/ffffff/555555/?text=Disney';
        const favoriteCharacterHTML = `
          <div class="favoriteCharacter">
            <h3 class="characterName">${characterName}</h3>
            <img class="characterImage" src="${imageUrl}" alt="${character.name}">
          </div>
        `;
        favoriteContainer.innerHTML += favoriteCharacterHTML;
    }
}


function loadFavoritesFromLocalStorage() {
    const favoriteContainer = document.getElementById('favoriteCharactersContainer');

    favoriteCharacters.forEach(characterName => {
        const character = character.find(char => char.name === characterName);
        const imageUrl = character.imageUrl ? character.imageUrl : 'https://via.placeholder.com/210x295/ffffff/555555/?text=Disney';
        const favoriteCharacterHTML = `
          <div class="favoriteCharacter">
            <h3 class="characterName">${characterName}</h3>
            <img class="characterImage" src="${imageUrl}" alt="${character.name}">
          </div>
        `;
        favoriteContainer.innerHTML += favoriteCharacterHTML;
    });
    loadFavoritesFromLocalStorage();
}

//LLAMO A LA FUNCION PARA PINTAR LOS FAVORITOS AL RECARGAR LA PÁGINA



//FUNCION PARA PODER FILTRAR PERSONAJES

document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.querySelector('.searchButton');

    searchButton.addEventListener('click', function (event) {
        event.preventDefault(); // Evitar que se recargue la página involuntariamente

        const filterInput = document.getElementById('filterInput');
        const searchTerm = filterInput.value.toLowerCase();

        const characterCards = document.querySelectorAll('.characterCard');

        characterCards.forEach(card => {
            const characterName = card.querySelector('h3').textContent.toLowerCase();

            if (characterName.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            };
        });
    });
});
