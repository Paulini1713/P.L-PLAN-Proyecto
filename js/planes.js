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

    // Espero que el DOM esté cargado
    document.addEventListener('DOMContentLoaded', function () {
        // Obtengo los botones de "+ Info"
        const buttonsInfo = document.querySelectorAll('.button-info');

        // Recorro cada botón y le añadimos un event listener
        buttonsInfo.forEach(button => {
            button.addEventListener('click', function () {
                const section = this.closest('.section');
                const oculto = section.querySelector('.div.oculto');

                // Hago visible el contenido oculto
                oculto.style.display = "block";

                // Añado la función del botón de cierre
                const closeButton = oculto.querySelector('.close-button');
                closeButton.addEventListener('click', function () {
                    oculto.style.display = "none"; // Oculto el contenido al hacer clic en la "X"
                });
            });
        });
    });

    // Acordeón con especificaciones de los planes
    const headers = document.querySelectorAll('.acordeon-nombre');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;

            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
})();
