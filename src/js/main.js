'use strict';

console.log('>> Ready :)');

//NO ENTIENDO FETCH MIDU SALVAME

fetch('api.disneyapi.dev/character?pageSize=50')
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.forEach(disneyCharacter => {
            const characters = `<li>${disneyCharacter.name}</li>`;

            document.querySelector('ul').insertAdjacentHTML('beforeend', characters);
        })
    })
    .catch(error => console.log(error));
