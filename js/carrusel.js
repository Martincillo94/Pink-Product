(function(){

    const carousel = document.getElementById('carrusel');
    var articulos = document.getElementsByClassName('.article');
    
    let intervalo = null;
    let scrollmaxim = carousel.scrollWidth - carousel.clientWidth;
    let step = 1;
    
    const play = () => {
        intervalo = setInterval(function(){
            carousel.scrollLeft = carousel.scrollLeft + step;
            if(carousel.scrollLeft === scrollmaxim){
                step = step * -1;
            }else if(carousel.scrollLeft == 0)
            step = step * -1;
        }, 10);
    };
    
    // const pausa = () => {
    //     clearInterval(intervalo);
    // };
    
    //   articulos.addEventListener('mouseover',()=>{
    //       pausa();
    //   });
    //   articulos.addEventListener('mouseout',()=>{
    //       play();
    //   });
    
    play();
}())

