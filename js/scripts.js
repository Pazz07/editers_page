/*
Copyright 2022 Pablo Arvizu

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Todos los archivos y clases en este proyecto incluyen el nombre del
archivo o clase y una descripción del propósito para facilitar la
identificación dentro de archivos de terceros. Este proyecto se proporciona
gratuitamente para su uso educativo y de aprendizaje. Se permite la
edición y modificación del mismo con el fin de mejorar tus habilidades
en programación y diseño web. Sin embargo, se requiere que se mantenga
el crédito original al creador de la página (Pablo Arvizu) y se prohíbe
su uso comercial sin autorización previa. Además, se prohíbe el uso del
código para reventa o distribución comercial. El objetivo de esta página
es ayudar a jóvenes y estudiantes a mejorar sus habilidades en programación
y diseño web, y para ello ponemos a disposición nuestra comunidad en Discord
donde podrán recibir asesoramiento y ayuda gratuita, así como solicitar
citas con el creador de la página para discutir sus proyectos y mejorar
sus habilidades. Los archivos originales se encuentran almacenados en este
repositorio de github.

cabe recalcar que si alguien no respeta las condiciones mencionadas en esta
licencia, se tomarán medidas legales según lo permitido.
*/


// Titulo animado
  var titles = [
  "⚪⚪⚪ editers ⚪⚪🔵",
  "⚪⚪⚪ editers ⚪🔵⚪",
  "⚪⚪⚪ editers 🔵⚪⚪",
  "⚪⚪⚪ editerS ⚪⚪⚪",
  "⚪⚪⚪ editeRS ⚪⚪⚪",
  "⚪⚪⚪ editERS ⚪⚪⚪",
  "⚪⚪⚪ ediTERS ⚪⚪⚪",
  "⚪⚪⚪ edITERS ⚪⚪⚪",
  "⚪⚪⚪ eDITERS ⚪⚪⚪",
  "⚪⚪⚪ EDITERS ⚪⚪⚪",
  "⚪⚪🔵 EDITERS ⚪⚪⚪",
  "⚪🔵⚪ EDITERS ⚪⚪⚪",
  "🔵⚪⚪ EDITERS ⚪⚪⚪",
  "🔵⚪⚪ EDITERS ⚪⚪⚪",
  "⚪🔵⚪ EDITERS ⚪⚪⚪",
  "⚪⚪🔵 EDITERS ⚪⚪⚪",
  "⚪⚪⚪ EDITERS ⚪⚪⚪",
  "⚪⚪⚪ eDITERS ⚪⚪⚪",
  "⚪⚪⚪ edITERS ⚪⚪⚪",
  "⚪⚪⚪ ediTERS ⚪⚪⚪",
  "⚪⚪⚪ editERS ⚪⚪⚪",
  "⚪⚪⚪ editeRS ⚪⚪⚪",
  "⚪⚪⚪ editerS ⚪⚪⚪",
  "⚪⚪⚪ editers ⚪⚪⚪",
  "⚪⚪⚪ editers 🔵⚪⚪",
  "⚪⚪⚪ editers ⚪🔵⚪",
  "⚪⚪⚪ editers ⚪⚪🔵"
  ];
  var count = 0;
  setInterval(function(){
    document.title = titles[count];
    count++;
  if(count === titles.length) {
    count = 0;
    }
    }, 250);

window.addEventListener('DOMContentLoaded', event => {

    // Función de reducción de la barra de navegación
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Reducir la barra de navegación 
    navbarShrink();

    // Reducir la barra de navegación cuando se desplaza la página
    document.addEventListener('scroll', navbarShrink);

    // Active Bootstrap scrollspy en el elemento de navegación principal
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Contraer la barra de navegación receptiva cuando el alternador está visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});
