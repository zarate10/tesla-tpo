let loader = document.querySelector('.loader')
let navbar = document.querySelector('.navbar-lg')

/* INSTANCIA INICIAL */
document.body.style.overflowX = 'hidden'
document.body.style.overflowY = 'hidden'

// ACTIVE NAVBAR
let btnContainer = document.querySelector(".nav-container");
let btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  } 

// ANIMACIONES SCROLL
window.sr = ScrollReveal(); 

const toTop = { 
  duration: 2000,
  origin: 'top',
  distance: '-100px'
}
const toBottom = { 
  duration: 2000,
  origin: 'bottom',
  distance: '-300px'
}

/* DOCUMENTO READY */
window.scrollTo(0,0)
document.addEventListener("DOMContentLoaded", function(e) {
  setTimeout(() => {

      loader.style.display = 'none'
      document.body.style.overflowY = 'scroll'
      
      sr.reveal('#inicio', toTop)
      sr.reveal('.logo-box', toBottom)

      // play video script
      let secInicio = document.querySelector('#inicio')
      let secVideo = document.querySelector('#video')
      let iframeYt = document.querySelector('#iframe-yt')
      let boxCar = document.querySelector('.box-car')

      /* 
       *  click botón play ejecuta el vídeo (L55), escondiendo la sección inicio y el head con una animación (L61-62)
       *  además de habilitar el iframe (L63) y ocultar el scroll (L65)
      */
      secInicio.addEventListener('click', () => {
        
        if (document.documentElement.clientWidth > 768) {
            
            iframeYt.setAttribute('src', 'https://www.youtube.com/embed/ijcAwrWMi0g?controls=0&autoplay=1') // agregamos la url al iframe con autoplay

            navbar.style.marginTop = "-500px"
            boxCar.style.marginTop = "-1920px"
            secVideo.style.display = "block"

            document.body.style.overflow = 'hidden'

            
            setTimeout(() => { // terminado el vídeo con una duración 107500 ms, habilitamos todo lo de abajo
                secVideo.style.display = "none"
                navbar.style.marginTop = "0px"
                boxCar.style.marginTop = "0px"

                setTimeout(() => { // habilitamos el scroll 1 segundo después de que todo lo demás haya sido habilitado.
                  document.body.style.overflowY = 'scroll'
                }, 1000)

            }, 107500)
        }
        
      })
  }, 3000) // <- este es el tiempo que tarda en ejecutarse las acciones dentro del timeout de DOMContentLoaded (cuando el documento está listo).
});

