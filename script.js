let scrollItems = [
    document.getElementById('about'),
    document.getElementById('techi'),
    document.getElementById('project')
];

function scrollMode(toUp, toDown) {
    return {toUp, toDown}
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

window.addEventListener("load", start)