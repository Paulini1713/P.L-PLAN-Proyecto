'use strict';

(function () {
    // Añado botón svg en pantallas pequeñas con un menú
    let headerButton = document.querySelector('.header-button');
    let ulNav = document.querySelector('.ul-nav');

 // let empiezaButton = document.querySelector('.botton-empieza');

// empiezaButton.addEventListener('click', () => window.open('nosotros.html'));

//document.getElementsByName('nueva-pestana').forEach(element => {
    // element.addEventListener('click', () => window.open(element.attributes.getNamedItem('data-page').value))
// });


    // Función handler genérica para eventos
    function handler(event) {
        if (event.type === 'click' && event.target === headerButton) {
            ulNav.classList.toggle('isVisible');
        } else if (event.type === 'click' && event.target.id === 'img-proceso') {
            const img = document.getElementById("img-proceso");

            if (img.src.includes("26(1).jpg")) {
                img.src = "assets/alternativa(1).jpg";
            } else {
                // Vuelve a la imagen original
                img.src = "assets/26(1).jpg";
            }
        }
    }

    // Asigno eventos a los elementos usando el handler
    headerButton.addEventListener('click', handler);
    document.getElementById("img-proceso").addEventListener("click", handler);
})();
