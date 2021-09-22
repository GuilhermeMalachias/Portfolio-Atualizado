const menuScroll = document.querySelectorAll('.items');


menuScroll.forEach(item => {
    item.addEventListener('click', scrollToAbout);
})

function scrollToAbout(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;
    
    window.scroll({
        top: to,
        behavior: "smooth"
    });
}

let time = 3000,
    currentImageIndex = 0,
    images = document
        .querySelectorAll("#sliderWorkshop img")
max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if (currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        // troca de imagem
        nextImage()
    }, time)
}

window.addEventListener("load", start);