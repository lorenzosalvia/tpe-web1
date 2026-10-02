document.addEventListener( 'DOMContentLoaded' , () => {
  const hamburgerButton = document.querySelector('.hamburger-menu');
  const mainNav = document.getElementById('main-nav');

  hamburgerButton.addEventListener( 'click' , () => {
    const isExpanded = hamburgerButton
      .getAttribute( 'aria-expanded' ) === 'true' ;
    hamburgerButton.setAttribute( 'aria-expanded' , !isExpanded ) ;
    mainNav.classList.toggle( 'nav-open' ) ; // Alterna la clase 'nav-open'
  } ) ;

  // Cierra el menú si se hace clic fuera de él en dispositivos móviles
  document.addEventListener( 'click' , (event) => {
    if( !mainNav.contains( event.target ) &&
        !hamburgerButton.contains( event.target ) &&
        mainNav.classList.contains( 'nav-open' ) ) {
      hamburgerButton.setAttribute( 'aria-expanded' , 'false' ) ;
      mainNav.classList.remove( 'nav-open' ) ;
    }
  } ) ;
} ) ;
/*
document (objeto) // Representa la página web cargada. Es el entry point al DOM

metodos de document:

.addEventListener() // Registra un evento ('tipo' e.g 'click', )
.getElemendById()
.querySelector

Eventos:
DOMContentLoaded
Click

Métodos de objetos de elemento:

getAttribute()
setAttribute()
contains()
classList()

Metodos del objeto classList:

getAttribute()
setAttribute()
contains()
*/

/* Todo el script de comportamiento se envuelve en el evento `DOMContentLoaded` para garantizar que el navegador haya terminado de parsear el documento HTML y el DOM esté completamente disponible antes de que el código intente interactuar con los elementos de la página. Esto previene errores críticos por referencias nulas (como intentar asociar un evento a un botón o menú que aún no fue interpretado por el navegador) y, al mismo tiempo, aísla las variables dentro de un ámbito local para no contaminar el espacio global de JavaScript.*/