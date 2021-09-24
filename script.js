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