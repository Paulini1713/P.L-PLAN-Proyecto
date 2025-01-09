'use strict';

//(function () {
    // Añado botón svg en pantallas pequeñas con un menú
    //let headerButton = document.querySelector('.header-button');
    //let ulNav = document.querySelector('.ul-nav');
    //console.log(headerButton);
    //console.log(ulNav);

    //headerButton.addEventListener('click', function () {
        //ulNav.classList.toggle('isVisible');
    //});

    // Función para el carrusel de Paula
    //let Paula = 0;

    //function mostrarSlidePaula(n) {
       // const slidesPaula = document.querySelectorAll('.div-ella .div-item');
        //if (n >= slidesPaula.length) {
           // paula = 0;
        //} else if (n < 0) {
            //paula = slidesPaula.length - 1;
        //} else {
            //paula = n;
        //}

        // Resaltar imagen activa
        //slidesPaula.forEach((slide, i) => {
            //slide.classList.remove('active');
            //if (i === paula) {
                //slide.classList.add('active');
           // }
        //});
    //}

    //function cambiarSlidePaula(n) {
        //mostrarSlidePaula(paula + n);
    //}

    // Iniciar el primer slide de Paula
    //mostrarSlidePaula(paula);

    // Botones navegación Paula
    //document.querySelector('.section-nosotros .prev').addEventListener('click', () => cambiarSlidePaula(-1));
    //document.querySelector('.section-nosotros .next').addEventListener('click', () => cambiarSlidePaula(1));

    // Carrusel de Mi Historia
    //let historia = 0;

    //function mostrarSlideHistoria(n) {
        //const slidesHistoria = document.querySelectorAll('.div-juntos .div-item');
        //if (n >= slidesHistoria.length) {
            //historia = 0;
        //} else if (n < 0) {
           // historia = slidesHistoria.length - 1;
        //} else {
            //historia = n;
        //}

        // Resaltar la imagen activa
        //slidesHistoria.forEach((slide, i) => {
            //slide.classList.remove('active');
            //if (i === historia) {
                //slide.classList.add('active');
            //}
        //});
    //}

    //function cambiarSlideHistoria(n) {
        //mostrarSlideHistoria(historia + n);
    //}

    // Iniciar primer slide de Historia
    //mostrarSlideHistoria(historia);

    // Botones navegación Historia
    //document.querySelector('.section-juntos .prev').addEventListener('click', () => cambiarSlideHistoria(-1));
    //document.querySelector('.section-juntos .next').addEventListener('click', () => cambiarSlideHistoria(1));

    // Botones de navegación
    //document.querySelector('.prev').addEventListener('click', () => cambiarSlide(-1));
    //document.querySelector('.next').addEventListener('click', () => cambiarSlide(1));

    // Manejo de botones y párrafos
    //const boton = document.querySelectorAll('.li-botones');
    //const parrafo = document.querySelectorAll('.parrafo-p');
    //console.log(boton, parrafo);

   // boton.forEach((_, i) => {
        //boton[i].addEventListener('click', () => {
            //boton.forEach((_, i) => {
                //boton[i].classList.remove('isVisible');
                //parrafo[i].classList.remove('isVisible');
            //});

            //boton[i].classList.add('isVisible');
            //parrafo[i].classList.add('isVisible');
        //});
    //});
//})();



(function () {

    // Función para manejar los eventos
    function handler( event ) {

        switch (event.target.className) {
            case 'header-button':
                ulNav.classList.toggle( 'isVisible' );
                break;

            case 'prev':
                if (event.target.closest('.section-nosotros')) {
                    cambiarSlidePaula(-1);
                } else if (event.target.closest('.section-juntos')) {
                    cambiarSlideHistoria(-1);
                } else {
                    cambiarSlide(-1);
                }
                break;

            case 'next':
                if (event.target.closest('.section-nosotros')) {
                    cambiarSlidePaula(1);
                } else if (event.target.closest('.section-juntos')) {
                    cambiarSlideHistoria(1);
                } else {
                    cambiarSlide(1);
                }
                break;

            case 'li-botones':
                const index = Array.from( boton ).indexOf(event.target);
                boton.forEach((btn, i) => {
                    btn.classList.remove('isVisible');
                    parrafo[i].classList.remove('isVisible');
                });
                boton[index].classList.add('isVisible');
                parrafo[index].classList.add('isVisible');
                break;
        }
    }

    // Añado botón svg en pantallas pequeñas con un menú
    const headerButton = document.querySelector('.header-button');
    const ulNav = document.querySelector('.ul-nav');
    console.log(headerButton);
    console.log(ulNav);

    headerButton.addEventListener('click', handler);

    // Función para el carrusel de Paula
    let paula = 0;
    const slidesPaula = document.querySelectorAll('.div-ella .div-item');

    function mostrarSlidePaula(n) {
        if (n >= slidesPaula.length) {
            paula = 0;
        } else if (n < 0) {
            paula = slidesPaula.length - 1;
        } else {
            paula = n;
        }

        // Resaltar imagen activa
        slidesPaula.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === paula) {
                slide.classList.add('active');
            }
        });
    }

    function cambiarSlidePaula(n) {
        mostrarSlidePaula(paula + n);
    }

    // Iniciar el primer slide de Paula
    mostrarSlidePaula(paula);

    // Botones navegación Paula
    document.querySelector('.section-nosotros .prev').addEventListener('click', handler);
    document.querySelector('.section-nosotros .next').addEventListener('click', handler);

    // Carrusel de Mi Historia
    let historia = 0;
    const slidesHistoria = document.querySelectorAll('.div-juntos .div-item');

    function mostrarSlideHistoria(n) {
        if (n >= slidesHistoria.length) {
            historia = 0;
        } else if (n < 0) {
            historia = slidesHistoria.length - 1;
        } else {
            historia = n;
        }

        // Resaltar imagen activa
        slidesHistoria.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === historia) {
                slide.classList.add('active');
            }
        });
    }

    function cambiarSlideHistoria(n) {
        mostrarSlideHistoria(historia + n);
    }

    // Iniciar primer slide de Historia
    mostrarSlideHistoria(historia);

    // Botones navegación Historia
    document.querySelector('.section-juntos .prev').addEventListener('click', handler);
    document.querySelector('.section-juntos .next').addEventListener('click', handler);

    // Botones de navegación
    document.querySelector('.prev').addEventListener('click', handler);
    document.querySelector('.next').addEventListener('click', handler);

    // Manejo de botones y párrafos
    const boton = document.querySelectorAll('.li-botones');
    const parrafo = document.querySelectorAll('.parrafo-p');
    console.log(boton, parrafo);

    boton.forEach((btn) => {
        btn.addEventListener('click', handler);
    });
})();
