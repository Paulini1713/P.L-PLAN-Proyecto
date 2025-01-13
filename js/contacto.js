'use strict';

    // (function () {
    // Añado botón svg en pantallas pequeñas con un menú
    //let headerButton = document.querySelector('.header-button');
    //let ulNav = document.querySelector('.ul-nav');
    //console.log(headerButton);
    //console.log(ulNav);

    //headerButton.addEventListener('click', function () {
       // ulNav.classList.toggle('isVisible');
    //});

    // Selecciono las imágenes de TikTok e Instagram y agrego una transición
    //const tiktokImg = document.querySelector('.tiktok img');
    //const instagramImg = document.querySelector('.instagram img');

    //[tiktokImg, instagramImg].forEach(img => {
        //img.style.transition = "transform 0.9s ease-in-out";
    //});

    // Función para agregar la animación cuando el ratón pasa sobre la imagen
    //function addAnimation(img) {
        //img.style.transform = "translateY(-10px) rotate(360deg)"; // Mover hacia arriba y rotar
    //}

    // Función para eliminar la animación cuando el ratón sale de la imagen
    //function removeAnimation(img) {
       //img.style.transform = "translateY(0) rotate(0deg)"; // Volver al estado original
    //}

    // Agrego efectos para las imágenes de TikTok e Instagram
    //tiktokImg.addEventListener('mouseover', () => addAnimation(tiktokImg));
    //tiktokImg.addEventListener('mouseout', () => removeAnimation(tiktokImg));

    //instagramImg.addEventListener('mouseover', () => addAnimation(instagramImg));
    //instagramImg.addEventListener('mouseout', () => removeAnimation(instagramImg));
//})();




(function () {
    
    // Selecciono el contenedor principal
    const container = document;

    // Añado botón svg en pantallas pequeñas con un menú y lo muestro por consola
    const headerButton = container.querySelector('.header-button');
    const ulNav = container.querySelector('.ul-nav');

    console.log(headerButton);
    console.log(ulNav);

    headerButton.addEventListener('click', () => ulNav.classList.toggle( 'isVisible' ));

    // Selecciono las imágenes de TikTok e Instagram y agrego una transición
    const images = [container.querySelector('.tiktok img'), container.querySelector( '.instagram img' )];

    // Función para animar con requestAnimationFrame
    function animate({ element, from, to, duration }) {
        let startTime = null;

        function step( currentTime ) {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;

            // Progreso entre 0 y 1 de duración
            const progress = Math.min(elapsed / duration, 1);

            // Hago las rotaciones de las imagenes
            const currentTransform = {

                translateY: from.translateY + (to.translateY - from.translateY) * progress,
                rotate: from.rotate + (to.rotate - from.rotate) * progress,
            };

            // Aplico la transformación del eje Y
            element.style.transform = `translateY(${currentTransform.translateY}px) rotate(${currentTransform.rotate}deg)`;

            if (progress < 1) requestAnimationFrame(step);
        }
        //Se termina la transición
        requestAnimationFrame( step );
    }

    // Función para iniciar animación al pasar el ratón sobre la imagen
    function addAnimation( img ) {
        animate({

            element: img,
            from: { translateY: 0, rotate: 0 },
            to: { translateY: -10, rotate: 360 },
            duration: 900,
        });
    }
    //Función para volver al estado original al quitar el ratón
    function removeAnimation(img) {
        animate({

            element: img,
            from: { translateY: -10, rotate: 360 },
            to: { translateY: 0, rotate: 0 },
            duration: 900,
        });
    }

    // Agrego efectos para las imágenes de TikTok e Instagram
    images.forEach(img => {

        img.addEventListener( 'mouseover', () => addAnimation( img ));
        img.addEventListener( 'mouseout', () => removeAnimation( img ));
    });
})();

