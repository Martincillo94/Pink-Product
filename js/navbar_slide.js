    (function(){
        //propiedades del menu slide
    var propMenuSlide = {
        btn_Burguer: document.getElementById('btn_b'),
        menu_slide: document.querySelector('.menu-slide'),
        enlaces: document.querySelectorAll('.header-movil #menu_slide .navbar a'),
        menu_Activo: false
    }

    //metodos del menu slide
    var metMenuSlide = {
        inicio: function(){
            propMenuSlide.btn_Burguer.addEventListener('click', metMenuSlide.toggleMenu);
            for(var i=0; i<propMenuSlide.enlaces.length; i++){
                propMenuSlide.enlaces[i].addEventListener('click',metMenuSlide.ocultarMenu);
            }
        },

        toggleMenu: function(){

            if(propMenuSlide.menu_Activo == false){
                propMenuSlide.menu_Activo = true; 
                propMenuSlide.menu_slide.className = propMenuSlide.menu_slide.className + ' active';
            }else{
                propMenuSlide.menu_Activo = false; 
                propMenuSlide.menu_slide.className = propMenuSlide.menu_slide.className.replace('active', '');
            }
        },

        ocultarMenu: function(){
            propMenuSlide.menu_Activo = false; 
            propMenuSlide.menu_slide.className = propMenuSlide.menu_slide.className.replace('active', '');
        }
    }

    metMenuSlide.inicio();
    }())
    