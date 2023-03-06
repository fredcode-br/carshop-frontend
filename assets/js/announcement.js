
let mainPhoto = document.getElementById("mainPhoto");
let mainName = mainPhoto.getAttribute("name");


function addImages() {
    const images= [  './assets/img/1.png', 
                './assets/img/4.jpeg', 
                './assets/img/5.jpeg', 
                './assets/img/6.jpeg', 
                './assets/img/7.jpeg', 
                './assets/img/8.jpeg']
    
    images.forEach ((image) => {
        const newLi = document.createElement('li');    
        newLi.innerHTML = `
        <img decoding="async" class="imgCarousel col-3" src="${image}" />
        `
        document.querySelector('#carousel').appendChild(newLi);   
    });
}


function updateImage(event) {
    let image = event.target;
    mainPhoto.src = image.src; 

}

function createImagesEventListener()
{
    //get all ".btn" elements (in array format)
    let imagesCarrousel = Array.from(document.getElementsByClassName("imgCarousel"));

    for(let item of imagesCarrousel){
        item.addEventListener('click', updateImage);
    }
}

function moveCarousel(btn) {
    let listImages = document.getElementById('carousel')
    let  btnPrevious = document.querySelector('.previous')
    let mover  = 150
    let posicaoXDireita = mover
    let posicaoXEsquerda = -mover
    if (btn == 'next') {
        listImages.scrollBy(posicaoXDireita, 0)
    }else {
        listImages.scrollBy(posicaoXEsquerda, 0)
    }

    if (listImages.scrollLeft > 0){
        btnPrevious.classList.remove('d-none');
        btnPrevious.classList.add('d-flex');
    }else {
        btnPrevious.classList.remove('d-flex');
        btnPrevious.classList.add('d-none'); 
    }
}

addImages()
createImagesEventListener()





