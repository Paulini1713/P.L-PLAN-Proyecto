'use strict'



// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtenemos todos los botones de "+ Info"
    const buttonsInfo = document.querySelectorAll('.button-info');

    // Recorremos cada botón y le añadimos un event listener
    buttonsInfo.forEach(button => {
        button.addEventListener('click', function() {
            // Encontramos la sección padre del botón
            const section = this.closest('.section');
            // Buscamos el div oculto en la sección
            const oculto = section.querySelector('.div.oculto');

            // Hacemos visible el contenido oculto
            oculto.style.display = "block";

            // Añadimos la funcionalidad del botón de cierre
            const closeButton = oculto.querySelector('.close-button');
            closeButton.addEventListener('click', function() {
                oculto.style.display = "none"; // Ocultamos el contenido al hacer clic en la "X"
            });
        });
    });
});


