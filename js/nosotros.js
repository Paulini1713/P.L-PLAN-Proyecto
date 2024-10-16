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
let Paula = 0;

function mostrarSlidePaula(n) {
    const slidesPaula = document.querySelectorAll( '.div-ella .div-item' );
    if (n >= slidesPaula.length) {

        Paula = 0;
    } else if (n < 0) {
        Paula = slidesPaula.length - 1;
    } else{
        Paula = n;
    }

    // Resaltar imagen activa
    slidesPaula.forEach(( slide, i ) => {
        slide.classList.remove('active');
        if (i === Paula) {
            slide.classList.add( 'active' ); 
        }
    });
}

function cambiarSlidePaula(n) {
    mostrarSlidePaula(Paula + n);
}

// Iniciar el primer slide de Paula
mostrarSlidePaula(Paula);

// Botones navegación Paula
document.querySelector('.section-nosotros .prev').addEventListener('click', () => cambiarSlidePaula(-1));
document.querySelector('.section-nosotros .next').addEventListener('click', () => cambiarSlidePaula(1));

// Carrusel de Mi Historia
let Historia = 0;

function mostrarSlideHistoria(n) {
    const slidesHistoria = document.querySelectorAll('.div-juntos .div-item');
    if (n >= slidesHistoria.length) {

        Historia = 0;
    } else if (n < 0) {
        Historia = slidesHistoria.length - 1;
    } else {
        Historia = n;
    }

    // Resaltar la imagen activa

    slidesHistoria.forEach(( slide, i ) => {
        slide.classList.remove('active');
        if (i === Historia) {

            slide.classList.add('active'); 
        }
    });
}

function cambiarSlideHistoria(n) {
    mostrarSlideHistoria(Historia + n);
}

// Iniciar primer slide de Historia
mostrarSlideHistoria(Historia);

// Botones navegación Historia
document.querySelector('.section-juntos .prev').addEventListener( 'click' , () => cambiarSlideHistoria(-1));
document.querySelector('.section-juntos .next').addEventListener( 'click' , () => cambiarSlideHistoria(1));


// Botones de navegación

document.querySelector('.prev').addEventListener( 'click' , () => cambiarSlide(-1));
document.querySelector('.next').addEventListener('click' , () => cambiarSlide(1));


const boton = document.querySelectorAll('.li-botones')
const parrafo = document.querySelectorAll('.parrafo-p')
console.log( boton , parrafo )

boton.forEach((  _  ,  i )=>{

    boton[i].addEventListener(`click` , ()=>{
        boton.forEach((  _  ,  i )=>{

            boton[i].classList.remove('isVisible')
            parrafo[i].classList.remove('isVisible')
        })

            boton[i].classList.add('isVisible')
            parrafo[i].classList.add('isVisible')
    })
})

