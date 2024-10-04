'use strict'

document.addEventListener("DOMContentLoaded", function() {
    const carruseles = document.querySelectorAll('.div-cuerpo');
    
    carruseles.forEach(function(carrusel) {
        let currentIndex = 0;
        const imagenes = carrusel.querySelectorAll('.img');
        const totalImages = imagenes.length;

        function showImage(index) {
            imagenes.forEach((img, i) => {
                img.classList.remove('isVisible');
                if (i === index) {
                    img.classList.add('isVisible');
                }
            });
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % totalImages;
            showImage(currentIndex);
        }

        // Cambio de imagen a los 5s
        setInterval(nextImage, 5000);
    });
});

