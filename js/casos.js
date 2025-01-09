'use strict';

//(function () {
    // Añado botón svg en pantallas pequeñas con un menú
    //const headerButton = document.querySelector('.header-button');
   // const ulNav = document.querySelector('.ul-nav');
    //console.log(headerButton);
    //console.log(ulNav);

    //headerButton.addEventListener('click', function () {
        //ulNav.classList.toggle('isVisible');
    //});

    // Añado un carrusel de 4 imágenes por columna
    //document.addEventListener("DOMContentLoaded", function () {
        //const carruseles = document.querySelectorAll('.div-cuerpo');

        //carruseles.forEach(function (carrusel) {
            //let currentIndex = 0;
            //const imagenes = carrusel.querySelectorAll('.img');
            //const totalImages = imagenes.length;

            //function showImage(index) {
                //imagenes.forEach((img, i) => {
                    //img.classList.remove('isActive');
                    //if (i === index) {
                        //img.classList.add('isActive');
                    //}
                //});
            //}

            //Pasa a la siguiente imagen
            //function nextImage() {
                //currentIndex = (currentIndex + 1) % totalImages;
                //showImage(currentIndex);
            //}

            // Cambio de imagen cada 5 segundos
            //setInterval(nextImage, 5000);
        //});
    //});

    // Agrupo los botones y las opciones en contenedores
    //const botonesYopciones = [
       // { boton: '.boton1', opcion: '.opcion1' },
       // { boton: '.boton2', opcion: '.opcion2' },
       // { boton: '.boton3', opcion: '.opcion3' }
    //];

    // Recorro los contenedores y añado los event listeners para activar al hacer click en el botón
    //botonesYopciones.forEach(item => {
        //const boton = document.querySelector(item.boton);
       // const opcion = document.querySelector(item.opcion);
    
        //Muestro por consola los botones y las opciones
       // console.log(boton);
        //console.log(opcion);

        //boton.addEventListener('click', function () {
            //opcion.classList.toggle('isActive');
        //});
    //});
//})();


'use strict';

(function () {
    // Añado botón svg en pantallas pequeñas con un menú
    const headerButton = document.querySelector('.header-button');
    const ulNav = document.querySelector('.ul-nav');
    console.log(headerButton);
    console.log(ulNav);

    headerButton.addEventListener('click', function () {
        ulNav.classList.toggle('isVisible');
    });

    // Añado un carrusel de 4 imágenes por columna
    document.addEventListener("DOMContentLoaded", function () {
        const carruseles = document.querySelectorAll('.div-cuerpo');

        carruseles.forEach(function (carrusel) {
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

            //Pasa a la siguiente imagen
            function nextImage() {

                currentIndex = (currentIndex + 1) % totalImages;
                showImage(currentIndex);
            }

            // Cambio de imagen cada 5 segundos
            setInterval(nextImage, 5000);
        });
    });

    // Función para agregar y cambiar de botones con handler
    function handler(element, callback) {
        if (element) {
            element.addEventListener( 'click' , callback);
        }
    }

    // Agrupo los botones y las opciones en contenedores
    const botonesYopciones = [
        { boton: '.boton1', opcion: '.opcion1' },
        { boton: '.boton2', opcion: '.opcion2' },
        { boton: '.boton3', opcion: '.opcion3' }
    ];

    // Recorro los contenedores y añado los event listeners para activar al hacer click en el botón
    botonesYopciones.forEach(item => {
        const boton = document.querySelector(item.boton);
        const opcion = document.querySelector(item.opcion);
    
        //Muestro por consola los botones y las opciones
        console.log( boton );
        console.log( opcion );

        handler(boton, function () {
            opcion.classList.toggle('isActive');
        });
    });
})();

