const images = document.querySelectorAll('.hero img');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');

let currentIndex = 0;

function showImage (index) {
    images.forEach((img, i) => {
        if ( i === index ) {
            img.style.transform = 'translateX(0)';
        } else if ( i < index ) {
            img.style.trasform = 'translateX(-100%)';
        } else {
            img.style.transform = 'translateX(100%)';
        }
    });
}

leftBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

rightBtn.addEventListener('click', () => {
    currentIndex = (currentIndex +1) % images.length;
    showImage(currentIndex);
});

showImage(currentIndex)
