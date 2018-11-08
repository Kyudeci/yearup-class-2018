//This comes from data.js
var gifs = window.data.data;

function ranGif() {
  let gifElement = document.getElementById('gifs');
  let randomNumber = Math.floor(Math.random() * gifs.length);
  gifElement.src = gifs[randomNumber].images.original.url;
}

let button = document.querySelector('button');
button.addEventListener('click', ranGif);
