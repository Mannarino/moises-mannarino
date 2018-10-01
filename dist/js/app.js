$(document).foundation()

var menuacerca=document.getElementById('acercas');
      var sectionocultado=document.getElementById('animacionesYpresentacion');
      menuacerca.addEventListener("click", ana);
      function ana(){
        sectionocultado.classList.add('deslizar-tabs-para-arriba');
      }


      var menuhabilidad=document.getElementById('habilidad-menu');
      
      menuhabilidad.addEventListener("click", ana);
      function ana(){
        sectionocultado.classList.add('deslizar-tabs-para-arriba');
      }


      var menuestudios=document.getElementById('estudios-menu');
      var sectionocultado=document.getElementById('animacionesYpresentacion');
      menuestudios.addEventListener("click", ana);
      function ana(){
        sectionocultado.classList.add('deslizar-tabs-para-arriba');
      }

      var menuportafolio=document.getElementById('portafolio-meni');
      var sectionocultado=document.getElementById('animacionesYpresentacion');
      menuportafolio.addEventListener("click", ana);
      function ana(){
        sectionocultado.classList.add('deslizar-tabs-para-arriba');
      }