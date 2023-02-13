    (function(){
        // propiedades slider
 var pSlider = {
    sliderContainer: document.getElementById('slider'),
    primerSlide: null
 }



// metodos slider
 var mSlider = {
    inicio:function(){
        setInterval(mSlider.moverSlide, 2500);
    },

    moverSlide: function(){

        pSlider.sliderContainer.style.transition = 'all 1s ease';
        pSlider.sliderContainer.style.marginLeft = '-100%';

        setTimeout(function(){
            pSlider.primerSlide = pSlider.sliderContainer.firstElementChild;
            pSlider.sliderContainer.appendChild(pSlider.primerSlide);
            pSlider.sliderContainer.style.transition = 'unset';
            pSlider.sliderContainer.style.marginLeft = 0;

        }, 1000);
    }
 }

 mSlider.inicio();
    }())
