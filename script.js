// Efecto de animación suave al cargar la página

const elements = document.querySelectorAll('header, .info, .image-container, .whatsapp-button-container');

// index é a ordem (0 primeiro, 1 segundo...)
elements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    }, 100 * index);
    // 100 * index - efeito de atraso
});

const slide = document.querySelector('.slide');
const imagens = document.querySelectorAll('.img-item');

let counter = 0;
const size = imagens[0].clientWidth;

function autoplay(){
    if (counter >= imagens.length - 1){
        counter = 0;
    }
    else{
        counter++;
    }
    slide.style.transition = "transform 0.8s ease-in-out";
    slide.style.transform = `translateX(${-size * counter}px)`;
};

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
