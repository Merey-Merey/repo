const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots-container');
let currentIndex = 0;
function createDots() {
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);});}
function goToSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
    document.querySelectorAll('.dot')[index].classList.add('active');
    currentIndex = index;}
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);}
createDots();
setInterval(nextSlide, 3000);



// DOMContentLoaded – HTML парағы толығымен жүктелген кезде кодты іске қосады.
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".second-page, .grid-container, .knopka, .text.two");
    const observer = new IntersectionObserver((entries) => { //IntersectionObserver – Экранға кіргенін бақылау
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");}});
    }, { threshold: 0.2 });
    elements.forEach(el => {
        el.classList.add("hidden"); 
        observer.observe(el);});});


        document.addEventListener("DOMContentLoaded", function () {
          const elements = document.querySelectorAll(".craft, .passion, .sm, .divider, .title-pro, .text-box");
          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add("visible");
                  }
              });
          }, { threshold: 0.7 });
          elements.forEach(el => {
              el.classList.add("hidden");
              observer.observe(el);
          });
      });


      document.addEventListener("DOMContentLoaded", function () {
        const items = document.querySelectorAll(".item");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, { threshold: 0.2 });
        items.forEach(item => observer.observe(item));
    });




const createOdometer = (el, value) => {
  const odometer = new Odometer({
    el: el,
    value: 0,
  });
  let hasRun = false;
  const options = {
    threshold: [0, 0.9],
  };
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!hasRun) {
          odometer.update(value);
          hasRun = true;
        }
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  observer.observe(el);
};
const subscribersOdometer = document.querySelector(".subscribers-odometer");
createOdometer(subscribersOdometer, 29800);
const videosOdometer = document.querySelector(".videos-odometer");
createOdometer(videosOdometer, 790);
const projectsOdometer = document.querySelector(".projects-odometer");
createOdometer(projectsOdometer, 1);
const subscribersOdometerT = document.querySelector(".subscribers-odometer-t");
createOdometer(subscribersOdometerT, 60);




var demoButtons;
function start () {
    demoButtons = document.querySelectorAll ('.js-modify');
  for (var i = 0; i < demoButtons.length; i++) {
    demoButtons[i].addEventListener ('click', toggleEffect);
  }
  var saveButtons = document.querySelectorAll ('.js-save');
  for (var i = 0; i < saveButtons.length; i++) {
    saveButtons[i].addEventListener ('click', toggleActive);
  }
}
function toggleEffect () {
  var target = document.querySelector (this.dataset.target);
      target.dataset.effect = this.dataset.effect;
  
  for (var i= 0; i < demoButtons.length; i++) {
    demoButtons[i].classList.remove ('active');
  }
  toggleActive.call (this);
}
function toggleActive () {
  this.classList.toggle ('active');
}
window.addEventListener ('load', start);


const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});


