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
    
    img.onload = function() {
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