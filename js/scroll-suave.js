
// propiedades scroll-suave
var pScroll = {
    posicionScroll: window.pageYOffset,
    enlacesSuaves: document.getElementsByClassName('scroll-suave'),
    volverArriba: document.getElementsByClassName('volver-arriba'),
    destino: null,
    distancia:null,
    intervalo: null

}


// metodos scroll-suave
var mScroll = {
    inicio:function(){

        for(i=0; i<pScroll.enlacesSuaves.length; i++){
            pScroll.enlacesSuaves[i].addEventListener('click', mScroll.moverse);
        }

        for(i=0; i<pScroll.volverArriba.length; i++){
            pScroll.volverArriba[i].addEventListener('click', mScroll.subir);
        }

    },

    moverse: function(e){
        e.preventDefault();
        clearInterval(pScroll.intervalo);
        pScroll.destino = this.getAttribute('href');
        pScroll.distancia = document.querySelector(pScroll.destino).offsetTop - 94;

        pScroll.posicionScroll = window.pageYOffset;
        pScroll.intervalo = setInterval(function(){
            
            if(pScroll.posicionScroll < pScroll.distancia){
                pScroll.posicionScroll += 30;

                
                if(pScroll.posicionScroll >= pScroll.distancia){
                    clearInterval(pScroll.intervalo);
                }
            
            }else{
                pScroll.posicionScroll -= 30;
                if(pScroll.posicionScroll <= pScroll.distancia){
                    clearInterval(pScroll.intervalo);
                }
            }


            window.scrollTo(0,pScroll.posicionScroll)
        },15);

    },

    subir: function(e){
        e.preventDefault();
        clearInterval(pScroll.intervalo);
        pScroll.posicionScroll = window.pageYOffset;
        pScroll.intervalo = setInterval(function(){
            if(pScroll.posicionScroll > 0){
                pScroll.posicionScroll -= 30;

                if(pScroll.posicionScroll <= 0){
                    clearInterval(pScroll.intervalo);
                }
            }else{
                return;
            }
           
           
            window.scrollTo(0,pScroll.posicionScroll)
        },15);

    }
}

mScroll.inicio();