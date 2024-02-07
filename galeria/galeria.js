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