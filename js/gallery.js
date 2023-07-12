var images = [
  "./img/gallery/imagen(1).jpg",
  "./img/gallery/imagen(2).jpg",
  "./img/gallery/imagen(3).jpg",
  "./img/gallery/imagen(4).jpg",
  "./img/gallery/imagen(5).jpg",
  "./img/gallery/imagen(6).jpg",
  "./img/gallery/imagen(7).jpg",
  "./img/gallery/imagen(8).jpg",
  "./img/gallery/imagen(9).jpg",
  "./img/gallery/imagen(10).jpg",
  "./img/gallery/imagen(11).jpg",
  "./img/gallery/imagen(12).jpg",
  "./img/gallery/imagen(13).jpg",
  "./img/gallery/imagen(14).jpg",
  "./img/gallery/imagen(15).jpg",
  "./img/gallery/imagen(16).jpg",
  "./img/gallery/imagen(17).jpg",
  "./img/gallery/imagen(18).jpg",
  "./img/gallery/imagen(19).jpg",
  "./img/gallery/imagen(20).jpg",
  "./img/gallery/imagen(21).jpg",
  "./img/gallery/imagen(22).jpg",
  "./img/gallery/imagen(23).jpg",
  "./img/gallery/imagen(24).jpg",
  "./img/gallery/imagen(25).jpg",
  "./img/gallery/imagen(26).jpg",
  "./img/gallery/imagen(27).jpg",
  "./img/gallery/imagen(28).jpg",
  "./img/gallery/imagen(29).jpg",
  "./img/gallery/imagen(30).jpg",
  "./img/gallery/imagen(31).jpg",
  "./img/gallery/imagen(32).jpg",
  "./img/gallery/imagen(33).jpg",
  "./img/gallery/imagen(34).jpg",
  "./img/gallery/imagen(35).jpg"
];

var currentImage = 0;
var gallery = document.getElementById("content-6");

function changeImage() {
  
  clearInterval(intervalo);

  var img = new Image();
  img.src = images[currentImage];
  img.className = "abus_photo";

  img.onload = function () {
    gallery.appendChild(img);
    var imgs = document.getElementsByTagName('img'); // Obtener todos los elementos img dentro del div
    var cantidadImagenes = imgs.length; // Obtener la cantidad de imágenes
    if (cantidadImagenes > 1 ) {
      document.getElementsByClassName("abus_photo")[0].remove();
    }
  };
  // Incrementa el índice de la imagen actual
  currentImage++;

  // Reinicia el índice si llega al final del arreglo de imágenes
  if (currentImage >= images.length) {
    currentImage = 0;
  }
}

// Cambia la imagen automáticamente cada 7.5 segundos
var intervalo = setInterval(changeImage, 7500);
intervalo;

var opacity = 1;

function abus_hide() {

  document.getElementById("hide").style.display = "none";
  document.getElementById("show").style.display = "block";

  document.getElementById("brightness_photo").style.display = "none";

  opacity -= 0.1;
  document.querySelectorAll(".abus_text")[0].style.opacity = opacity;
  document.querySelectorAll(".abus_text")[1].style.opacity = opacity;

  if (opacity > 0) {
    requestAnimationFrame(abus_hide);
  }
}

function abus_show() {

  document.getElementById("hide").style.display = "block";
  document.getElementById("show").style.display = "none";

  document.getElementById("brightness_photo").style.display = "block";
  
  document.querySelectorAll(".abus_text")[0].style.opacity = "1";
  document.querySelectorAll(".abus_text")[1].style.opacity = "1";
}
  