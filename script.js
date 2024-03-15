const fullImgBox = document.getElementById("full-img-box"), 
imgElement = document.getElementById("elemento-imagen"),
rightBtn = document.getElementById("right-btn"),
leftBtn = document.getElementById("left-btn"),
closeImg = document.getElementById("x-btn"),
listaImg = [...document.querySelectorAll(".imagen")];

let indexImg = 0;

listaImg.forEach((img,i) => {
    img.addEventListener("click", (e) => {
        clicked(i)
        fullImgBox.style.display = "flex";
        imgElement.src = img.src
    })
})

function clicked(position){
    indexImg = position;
    imgElement.src = listaImg[indexImg].src;
}

rightBtn.addEventListener("click", e =>{
    if (indexImg >= listaImg.length -1){
        indexImg = -1;
    }
    indexImg++;
    imgElement.src = listaImg[indexImg].src; 
})

leftBtn.addEventListener("click", e =>{
    if (indexImg <= 0) {
        indexImg = listaImg.length;
    }
    indexImg--;
    imgElement.src = listaImg[indexImg].src; 
})

closeImg.addEventListener("click", e =>{
    fullImgBox.style.display = "none";
})


// Función para verificar si un elemento está en el viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Función para animar el contador
function animateCounter(element, start, end, duration) {
    let startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        const value = Math.floor(percentage * (end - start) + start);
        element.textContent = value;
        if (percentage < 1) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
}

// Función principal para inicializar el contador al desplazarse
function initCounterOnScroll() {
    const datosConstruccionSection = document.getElementById('datos-construccion');
    const numbers = document.querySelectorAll('.numero');

    function handleScroll() {
        if (isInViewport(datosConstruccionSection)) {
            numbers.forEach((number, index) => {
                const startValue = 0;
                const endValue = parseInt(number.dataset.target);
                const animationDuration = 2000;
                animateCounter(number.querySelector('h1'), startValue, endValue, animationDuration);
            });

            // Elimina el event listener después de que se activa el contador
            window.removeEventListener('scroll', handleScroll);
        }
    }

    // Añade el event listener para manejar el scroll
    window.addEventListener('scroll', handleScroll);
}

// Llama a la función principal para inicializar el contador al desplazarse
initCounterOnScroll();