var images = [
  "./img/gallery/imagen(1).jpg",
  "./img/gallery/imagen(2).jpg",
  "./img/gallery/imagen(3).jpg",
  "./img/gallery/imagen(4).jpg",
  "./img/gallery/imagen(5).jpg"
];

var currentImage = 0;
var gallery = document.getElementById("content-6");

function changeImage() {
  var img = new Image();
  img.src = images[currentImage];

  img.onload = function () {
    gallery.appendChild(img);
  };
  // Incrementa el índice de la imagen actual
  currentImage++;

  // Reinicia el índice si llega al final del arreglo de imágenes
  if (currentImage >= images.length) {
    currentImage = 0;
  }
}

// Cambia la imagen automáticamente cada 7.5 segundos
setInterval(changeImage, 7500);

var opacity = 1;

function abus_hide() {

  document.getElementById("hide").style.display = "none";
  document.getElementById("show").style.display = "block";

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
  
  document.querySelectorAll(".abus_text")[0].style.opacity = "1";
  document.querySelectorAll(".abus_text")[1].style.opacity = "1";
}
  