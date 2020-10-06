// slider
let slider = document.getElementById('slider');
let slides = slider.querySelectorAll('.slider-content');
let f = slider.querySelector('.froward');
let b = slider.querySelector('.back');

// current slider location
let sliderIndex = 0;
let isPaused = false;

// move 1 slide forward
function sliderMoveFroward() {
  // if there are more slides to show
  if (sliderIndex < slides.length - 1) {
    slides[sliderIndex].style.display = "none";
    sliderIndex++;
    slides[sliderIndex].classList.add('animate__animated', 'animate__fadeIn');
    slides[sliderIndex].style.display = "";
  }
  // end of bounds, go to first slide
  else {
    slides[sliderIndex].style.display = "none";
    sliderIndex = 0;
    slides[sliderIndex].classList.add('animate__animated', 'animate__fadeIn');
    slides[sliderIndex].style.display = "";
  }
}

// move 1 slide backward
function sliderMoveBack() {
  // if there are more slides to show
  if (sliderIndex !== 0) {
    slides[sliderIndex].style.display = "none";
    sliderIndex--;
    slides[sliderIndex].classList.add('animate__animated', 'animate__fadeIn');
    slides[sliderIndex].style.display = "";
  }
  // end of bounds, go to first slide
  else {
    slides[sliderIndex].style.display = "none";
    sliderIndex = slides.length - 1;
    slides[sliderIndex].classList.add('animate__animated', 'animate__fadeIn');
    slides[sliderIndex].style.display = "";
  }
}

// auto play (loop)
let autoPlay = window.setInterval(() => {
  if (!isPaused) {
    sliderMoveFroward();
  }
}, 5000);

f.addEventListener('click', sliderMoveFroward);
b.addEventListener('click', sliderMoveBack);

// if mouse on slider, pause it.
slider.addEventListener('mouseover', (e) => {
  isPaused = true;
});
slider.addEventListener('mouseout', (e) => {
  isPaused = false;
});
