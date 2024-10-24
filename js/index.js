'use strict'

//Añado botón svg en pantallas pequeñas con un menú
let headerButton = document.querySelector('.header-button')
let ulNav = document.querySelector('.ul-nav')
console.log( headerButton )
console.log ( ulNav)

headerButton.addEventListener(`click` , function(){
    ulNav.classList.toggle(`isVisible`)
})

// let empiezaButton = document.querySelector('.botton-empieza');

// empiezaButton.addEventListener('click', () => window.open('nosotros.html'));

//document.getElementsByName('nueva-pestana').forEach(element => {
    // element.addEventListener('click', () => window.open(element.attributes.getNamedItem('data-page').value))
// });
