// Efecto de animación suave al cargar la página

const elements = document.querySelectorAll('.escondido');

// index é a ordem (0 primeiro, 1 segundo...)
elements.forEach((el, index) => {
    setTimeout(() => {
        el.classList.add('revelar');
    }, 100 * index);
    // 100 * index - efeito de atraso
});

const slide = document.querySelector('.slide');
const imagens = document.querySelectorAll('.img-item');

let counter = 0;

function autoplayV2(){
    const currentImage = document.querySelector('.active');
    if (counter >= imagens.length - 1){
        counter = 0;
    }
    else{
        counter++;
    }
    const nextImage = imagens[counter];

    currentImage.classList.remove('active');
    currentImage.classList.add('slide-out');
    nextImage.classList.add('slide-in')

    // { once: true } - impede o acumulo de eventos (executa uma vez e depois deleta)
    currentImage.addEventListener('animationend', ()=>{
        currentImage.classList.remove('slide-out');
        nextImage.classList.remove('slide-in')
        nextImage.classList.add('active');
    }, { once: true });
};

// setInterval(autoplay, 5000);
setInterval(autoplayV2, 5000);
