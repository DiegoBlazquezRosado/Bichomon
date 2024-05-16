console.log(document.title);

/*
Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

Cambia el color de fondo de la primera generación de Pokimon.

Imprime por consola la URL de la página.

Imprime por consola el dominio de la página.

Imprime todos los nodos de imagen.

Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

Premium:

Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying
*/

document.getElementById('gen-1').innerHTML = "Generasión 1 Pokimon";

document.querySelector('.infocard-list.infocard-list-pkmn-lg').style.backgroundColor="lightgreen";

console.log(window.location.href);

console.log(window.location.hostname);

console.log(document.getElementsByTagName("img"));

let imgSrc = document.querySelectorAll('img');
for (let i=0; i<imgSrc.length; i++) {
    imgSrc[i].setAttribute('src', 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif');
}

/*
let typeFlying = document.querySelectorAll('.itype.flying');
let infoCard = document.querySelectorAll('.infocard-lg-data.text-muted');

for (let i=0; i<infoCard.length; i++) {
    if (infoCard.childNodes.className===".itype.flying") {
        infoCard[i].style.backgroundColor="lightblue";
    }
}
*/
