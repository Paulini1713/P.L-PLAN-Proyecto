'use strict'

//let index = 0;

//function mostrarSlide(n) {
    //const slides = document.querySelectorAll('.div-item');
    //if (n >= slides.length) {
       // index = 0;
   // } else if (n < 0) {
      //  index = slides.length - 1;
   // } else {
      //  index = n;
   // }

   // const offset = -index * 100;
   // document.querySelector('.div-ella').style.transform = `translateX(${offset}%)`;
//}
//function cambiarSlide(n) {
    //mostrarSlide(index + n);
//}

// Mostrar el primer slide al cargar
//mostrarSlide(index);





//'use strict';

let index = 0;

function mostrarSlide(n) {
    const slides = document.querySelectorAll('.div-item');
    
     //Limitar el índice para que no se salga del rango
    if (n >= slides.length) {
        index = 0;
    } else if (n < 0) {
        index = slides.length - 1;
    } else {
        index = n;
    }

    // Desplazamiento para centrar la imagen
    const offset = -index * 25; // Moverse un tercio por cada imagen
   // document.querySelector('.div-ella').style.transform = `translateX(${offset}%)`;

    // Resaltar la imagen central (imagen activa)
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
       if (i === index) {
            slide.classList.add('active'); // Hacer la imagen central más grande
        }
    });
}

// Cambiar al siguiente slide
function cambiarSlide(n) {
    mostrarSlide(index + n);
}

// Mostrar el primer slide al cargar
mostrarSlide(index);

// Botones de navegación
document.querySelector('.prev').addEventListener('click', () => cambiarSlide(-1));
document.querySelector('.next').addEventListener('click', () => cambiarSlide(1));








