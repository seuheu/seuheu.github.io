const images = [
   "bg1.jpg",
   "bg2.jpg",
   "bg3.jpg",
   "bg4.jpg",
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = `url(img/${chosenImage})`

function randomBackgrount(){
    document.body.style.backgroundImage.remove
    document.body.style.backgroundImage = bgImage
}

randomBackgrount();
setInterval(randomBackgrount, 1000);
