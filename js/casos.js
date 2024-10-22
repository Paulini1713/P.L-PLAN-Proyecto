'use strict'

let headerButton = document.querySelector('.header-button')
let ulNav = document.querySelector('.ul-nav')
console.log( headerButton )
console.log ( ulNav)

headerButton.addEventListener(`click` , function(){
    ulNav.classList.toggle(`isVisible`)
})




document.addEventListener("DOMContentLoaded", function() {
    const carruseles = document.querySelectorAll('.div-cuerpo');
    
    carruseles.forEach(function(carrusel) {
        let currentIndex = 0;
        const imagenes = carrusel.querySelectorAll('.img');
        const totalImages = imagenes.length;

        function showImage(index) {
            imagenes.forEach((img, i) => {
                img.classList.remove('isActive');
                if (i === index) {
                    img.classList.add('isActive');
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


    //Animaciones botones
    let boton1 = document.querySelector('.boton1')
    console.log( boton1 )
    
    let opcion1 = document.querySelector('.opcion1')
    console.log( opcion1 )
    
    boton1.addEventListener(`click` , function(){
        opcion1.classList.toggle(`isActive`) 
    } )
