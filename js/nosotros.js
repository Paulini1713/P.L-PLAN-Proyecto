'use strict'

let headerButton = document.querySelector('.header-button')
let ulNav = document.querySelector('.ul-nav')
console.log( headerButton )
console.log ( ulNav)

headerButton.addEventListener(`click` , function(){
    ulNav.classList.toggle(`isVisible`)
})


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


// Función para el carrusel de Paula
let indexPaula = 0;

function mostrarSlidePaula(n) {
    const slidesPaula = document.querySelectorAll('.div-ella .div-item');
    if (n >= slidesPaula.length) {
        
        indexPaula = 0;
    } else if (n < 0) {
        indexPaula = slidesPaula.length - 1;
    } else {
        indexPaula = n;
    }

    // Resaltar imagen activa
    slidesPaula.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === indexPaula) {
            slide.classList.add('active'); // Hacer la imagen activa más grande
        }
    });
}

function cambiarSlidePaula(n) {
    mostrarSlidePaula(indexPaula + n);
}

// Iniciar el primer slide de Paula
mostrarSlidePaula(indexPaula);

// Botones navegación para Paula
document.querySelector('.section-nosotros .prev').addEventListener('click', () => cambiarSlidePaula(-1));
document.querySelector('.section-nosotros .next').addEventListener('click', () => cambiarSlidePaula(1));

// Función para el carrusel de Mi Historia
let indexHistoria = 0;

function mostrarSlideHistoria(n) {
    const slidesHistoria = document.querySelectorAll('.div-juntos .div-item');
    if (n >= slidesHistoria.length) {

        indexHistoria = 0;
    } else if (n < 0) {
        indexHistoria = slidesHistoria.length - 1;
    } else {
        indexHistoria = n;
    }

    // Resaltar la imagen activa

    slidesHistoria.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === indexHistoria) {
            slide.classList.add('active'); 
        }
    });
}

function cambiarSlideHistoria(n) {
    mostrarSlideHistoria(indexHistoria + n);
}

// Iniciar primer slide de Mi Historia
mostrarSlideHistoria(indexHistoria);

// Botones navegación Mi Historia
document.querySelector('.section-juntos .prev').addEventListener('click', () => cambiarSlideHistoria(-1));
document.querySelector('.section-juntos .next').addEventListener('click', () => cambiarSlideHistoria(1));


// Botones de navegación
document.querySelector('.prev').addEventListener( 'click' , () => cambiarSlide(-1));
document.querySelector('.next').addEventListener('click' , () => cambiarSlide(1));


const boton = document.querySelectorAll('.li-botones')
const parrafo = document.querySelectorAll('.parrafo-p')
console.log( boton , parrafo )

boton.forEach(( _ , i)=>{
    boton[i].addEventListener(`click` , ()=>{
        boton.forEach(( _ , i)=>{

            boton[i].classList.remove('isVisible')
            parrafo[i].classList.remove('isVisible')
        })

            boton[i].classList.add('isVisible')
            parrafo[i].classList.add('isVisible')
    })
})

