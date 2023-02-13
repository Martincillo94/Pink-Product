(function(){
    let propParallax = {
        seccion: document.getElementById("ventajas"),
        recorrido: null,
        limite:null
    }
    
    let metParallax = {
        
        inicio: function (){
            window.addEventListener("scroll", metParallax. scrollParallax);
        },
        scrollParallax: function(){
            propParallax.recorrido = window.pageYOffset; 
            propParallax.limite = propParallax.seccion.offsetTop + propParallax.seccion.offsetHeight;
    
            if(propParallax.recorrido > propParallax.offsetTop - window.outerHeight && propParallax.recorrido <= propParallax.limite){
                propParallax.seccion.style.backgroundPositionY = (propParallax.recorrido - propParallax.seccion.offsetTop) / 1.5 + "px"; 
            }else{
                propParallax.seccion.style.backgroundPositionY = (propParallax.recorrido - propParallax.seccion.offsetTop) / 1.5 + "px"; 
            }
    
        }
    }
    
    metParallax.inicio();
}())


