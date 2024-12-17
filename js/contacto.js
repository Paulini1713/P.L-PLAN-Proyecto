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

    // Selecciono las imágenes de TikTok e Instagram y agrego una transición
    const tiktokImg = document.querySelector('.tiktok img');
    const instagramImg = document.querySelector('.instagram img');

    tiktokImg.style.transition = "transform 0.9s ease-in-out";
    instagramImg.style.transition = "transform 0.9s ease-in-out";

    // Función para agregar la animación cuando el ratón pasa sobre la imagen
    function addAnimation(img) {
        img.style.transform = "translateY(-10px) rotate(360deg)"; // Mover hacia arriba y rotar
    }

    // Función para eliminar la animación cuando el ratón sale de la imagen
    function removeAnimation(img) {
        img.style.transform = "translateY(0) rotate(0deg)"; // Volver al estado original
    }

    // Agrego efectos para las imágenes de TikTok e Instagram
    tiktokImg.addEventListener('mouseover', () => addAnimation(tiktokImg));
    tiktokImg.addEventListener('mouseout', () => removeAnimation(tiktokImg));

    instagramImg.addEventListener('mouseover', () => addAnimation(instagramImg));
    instagramImg.addEventListener('mouseout', () => removeAnimation(instagramImg));
})();
