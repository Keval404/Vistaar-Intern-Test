let slides = document.querySelectorAll('.slideshow img');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 1500); // Change slide every 3 seconds

function nextSlide() {
  slides[currentSlide].style.opacity = 0;
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.opacity = 1;
}

var gifs = ["img/fullgif1.gif", "img/fullgif2.gif", "img/fullgif3.gif", "img/fullgif4.gif", "img/fullgif5.gif"]; // Add your GIF paths here
var currentGifIndex = 0;
var gifImg = document.getElementById('gif');

function changeGif(direction) {
  if (direction === 'next') {
    currentGifIndex = (currentGifIndex + 1) % gifs.length;
  } else if (direction === 'previous') {
    currentGifIndex = (currentGifIndex - 1 + gifs.length) % gifs.length;
  }
  gifImg.src = gifs[currentGifIndex];
}


const imageToClick = document.querySelector('.image-click');
const fullScreenOverlay = document.getElementById('fullScreenOverlay');
const closeBtn = document.getElementById('closeBtn');

// Function to open full screen on image click
imageToClick.addEventListener('click', function() {
  fullScreenOverlay.style.display = 'block';
});

// Function to close full screen on close button click
closeBtn.addEventListener('click', function() {
  fullScreenOverlay.style.display = 'none';
}); 
