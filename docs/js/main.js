console.log(">> Ready :)");document.addEventListener("DOMContentLoaded",i);const o=[],s=document.querySelectorAll(".characterCard");async function i(){const a="//api.disneyapi.dev/character?pageSize=50";try{const t=(await(await fetch(a)).json()).data;d(t)}catch(e){console.error("Error al obtener datos de la API:",e)}}function d(a){const e=document.getElementById("disneyCharactersContainer");a.forEach(r=>{const t=`
      <div class="characterCard">
        <h3 class="characterName">${r.name}</h3>
        <img class="characterImage" src="${r.imageUrl}" alt="${r.name}">
      </div>
    `;e.innerHTML+=t})}s.forEach(a=>{a.addEventListener("click",()=>{l(a)})});function l(a){const e=a.querySelector(".characterName").textContent;if(!o.includes(e)){o.push(e);const t=document.getElementById("favoriteCharactersContainer"),n=`
      <div class="favoriteCharacter">
        <h3 class="characterName">${e}</h3>
        <img class="characterImage" src="${character.imageUrl}" alt="${character.name}">
      </div>
    `;t.innerHTML+=n}}document.addEventListener("DOMContentLoaded",function(){document.querySelector(".searchButton").addEventListener("click",function(e){e.preventDefault();const t=document.getElementById("filterInput").value.toLowerCase();document.querySelectorAll(".characterCard").forEach(c=>{c.querySelector("h3").textContent.toLowerCase().includes(t)?c.style.display="block":c.style.display="none"})})});
//# sourceMappingURL=main.js.map
