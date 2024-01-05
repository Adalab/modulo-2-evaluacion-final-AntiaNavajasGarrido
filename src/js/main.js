'use strict';

console.log('>> Ready :)');
//MIDU SALVAME

// EVENTO PARA CARGAR TODOS LOS PERSONAJES

document.addEventListener('DOMContentLoaded', loadCharacters);


async function loadCharacters() {
  const apiUrl = '//api.disneyapi.dev/character';
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
  const favoritosList = document.getElementById('favoritosList');

  characters.forEach(character => {
    //USO DEL OPERADOR ? PARA SABER SI TIENE IMAGEN, SI NO CARGARÁ LA ESPECIFICADA EN EL EJERCICIO - DISAPPOINTED BUT NOT SURPRISED: NO ME FUNCIONA
    // const imageUrl = personaje.imageUrl ? personaje.imageUrl : 'https://via.placeholder.com/210x295/ffffff/555555/?text=Disney';
    const characterHTML = `
      <div class="characterCard">
        <h2>${character.name}</h2>
        <img src="${character.imageUrl}" alt="${character.name}">
      </div>
    `;

    container.innerHTML += characterHTML;
  });

}

//FUNCIONES PARA MOSTRAR LOS FAVORITOS

//FUNCION PARA PODER FILTRAR PERSONAJES

function filterCharacters() {
  const filterInput = document.getElementById('filterInput');
  const searchTerm = filterInput.value.toLowerCase();

  const characterCards = document.querySelectorAll('.characterCard');

  characterCards.forEach(card => {
    const characterName = card.querySelector('h2').textContent.toLowerCase();

    if (characterName.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
