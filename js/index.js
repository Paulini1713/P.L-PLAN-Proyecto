

'use strict';

(function () {
    // Añado botón svg en pantallas pequeñas con un menú
    let headerButton = document.querySelector('.header-button');
    let ulNav = document.querySelector('.ul-nav');
    console.log(headerButton);
    console.log(ulNav);

    headerButton.addEventListener('click', function () {
        ulNav.classList.toggle('isVisible');
    });

// let empiezaButton = document.querySelector('.botton-empieza');

// empiezaButton.addEventListener('click', () => window.open('nosotros.html'));

//document.getElementsByName('nueva-pestana').forEach(element => {
    // element.addEventListener('click', () => window.open(element.attributes.getNamedItem('data-page').value))
// });


    // Cambio la imagen del proceso al darle click por otra imagen
    document.getElementById("img-proceso").addEventListener("click", function () {
        const img = document.getElementById("img-proceso");

        if (img.src.includes("26(1).jpg")) {
            img.src = "assets/alternativa(1).jpg";
        } else {
            // Vuelve a la imagen original
            img.src = "assets/26(1).jpg";
        }
    });

})();
