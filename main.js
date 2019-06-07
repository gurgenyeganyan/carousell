let play = document.querySelector("#play"),
    pause = document.querySelector("#pause"),
    prev = document.querySelector("#previous"),
    next = document.querySelector("#next"),
    container = document.querySelector("#img-container"),
    images = ['images/picture_1.jpg', 'images/picture_2.jpg', 'images/picture_3.jpg', 'images/picture_4.jpg'],
    imageCounter = 0,
    slideShow;

    

play.addEventListener('click', startShow);
pause.addEventListener('click', pauseShow);
prev.addEventListener('click', previousImage);
next.addEventListener('click', nextImage);

function nextImage() {
    if(imageCounter === images.length-1) {
        imageCounter = 0;
    } else{
        imageCounter++;
    }
    container.style.backgroundImage = `url(${images[imageCounter]})`;
    document.body.style.backgroundImage = `url(${images[imageCounter]})`;
}

function previousImage() {
    if(slideShow && imageCounter >= 2) {
        imageCounter -= 2;
    } else if(imageCounter === 0) {
        imageCounter = images.length-1;
    } else {
        --imageCounter;
    }
    container.style.backgroundImage = `url(${images[imageCounter]})`;
    document.body.style.backgroundImage = `url(${images[imageCounter]})`;
}

function startShow() {  
    slideShow = setInterval(nextImage, 1500);
    return slideShow;
}

function pauseShow() {
    clearInterval(slideShow);
}
