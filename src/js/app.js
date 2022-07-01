let loader = document.querySelector('.loader')
let navbar = document.querySelector('.navbar-lg')
let secciones = document.querySelectorAll('section')
let progressBar = document.querySelectorAll('.progress')

let widthAux1 = progressBar[0].getAttribute("style"); 
let widthAux2 = progressBar[1].getAttribute("style");
let widthAux3 = progressBar[2].getAttribute("style");

function removerWidth(){ 
  for(let i = 0; i < progressBar.length; i++){ 
    progressBar[i].setAttribute('style', 'width: 0%;')
  }
}

window.onscroll = function() {
  let scrollY = window.scrollY;
  // console.log(scrollY);
  
  if (scrollY > 1300) {
    progressBar[0].setAttribute('style', widthAux1)
    progressBar[1].setAttribute('style', widthAux2)
    progressBar[2].setAttribute('style', widthAux3)
  }
};


/* INSTANCIA INICIAL */
document.body.style.overflowX = 'hidden'
document.body.style.overflowY = 'hidden'
for (let i = 0; i < secciones.length; i++){
  secciones[i].style.display = 'none'
}

// ACTIVE NAVBAR
let btnContainer = document.querySelector(".nav-container");
let btns = btnContainer.getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  } 

// CONFIGURADOR 
let configurador = document.querySelector('.configurador')
let toggleConfig = document.querySelector('#btn-config')
let btnsColors = document.querySelectorAll('.box-color')
let containerImg = document.querySelector('#veh-color')
let nameColor = document.querySelector('.name-color-veh')

let configDesple = false; 

toggleConfig.addEventListener('click', () => {
  if (configDesple === false){ 
    configurador.style.display = "flex"
    configurador.style.marginLeft = "0"
    toggleConfig.textContent = 'Comprar'

    // animaciones nav
    navbar.style.marginTop = "-500px"
    
    configDesple = true; 
  } else { 
    toggleConfig.textContent = 'Configurar'
    configurador.style.marginLeft = "-100vw"

    // animaciones nav
    navbar.style.marginTop = "0"

    configDesple = false;
  }
});

for(let i = 0; i < btnsColors.length; i++){ 
  btnsColors[i].addEventListener('click', () => {
    // console.log(btnsColors[i].className)
    if (btnsColors[i].className === 'box-color black'){
      containerImg.style.marginLeft = "-100vw"
      nameColor.textContent = 'Negro sólido'
      containerImg.setAttribute('alt', 'TESLA MODEL Y - Negro sólido')

      setTimeout(() => {
        containerImg.setAttribute('src', './assets/img/color_veh/color_black.jpg')
        containerImg.style.marginLeft = "0"
      },500)

    } else if (btnsColors[i].className === 'box-color red') {
      containerImg.style.marginLeft = "-100vw"
      nameColor.textContent = 'Rojo multicapa'
      containerImg.setAttribute('alt', 'TESLA MODEL Y - Rojo multicapa')

      setTimeout(() => {
        containerImg.setAttribute('src', './assets/img/color_veh/color_red.jpg')
        containerImg.style.marginLeft = "0"
      },500)

    } else {
      containerImg.style.marginLeft = "-100vw"
      nameColor.textContent = 'Blanco perla multicapa'
      containerImg.setAttribute('alt', 'TESLA MODEL Y - Blanco perla multicapa')

      setTimeout(() => {
        containerImg.setAttribute('src', './assets/img/color_veh/color_white.jpg')
        containerImg.style.marginLeft = "0"
      },500)
    }
  })
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
document.addEventListener("DOMContentLoaded", function(e) {
  //window.scrollTo(0,0) <activar<activar<activar<activar<activar<activar<activar<activar<activar<activar<activar
  setTimeout(() => {

    removerWidth()

      /* mostrar cuando el documento está listo */
      loader.style.display = 'none'
      document.body.style.overflowY = 'scroll'
      for (let i = 0; i < secciones.length; i++){
        secciones[i].style.display = 'flex'
        if (secciones[i].id === 'video'){ 
          secciones[i].style.display = 'none'
        }
      }
      
      /* animaciones */
      sr.reveal('#inicio', toTop)
      sr.reveal('.logo-box', toBottom)
      sr.reveal('#box-info-nosotros', toTop)
      sr.reveal('#box-img-nosotros', toBottom)

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

            }, 108000)
        }
        
      })
  }, 150) // <- este es el tiempo que tarda en ejecutarse las acciones dentro del timeout de DOMContentLoaded (cuando el documento está listo).
});
