const arrows = Array.from(document.getElementsByClassName('slider__arrow'));
const arrowPrev = document.getElementsByClassName('slider__arrow_prev');
const arrowNext = document.getElementsByClassName('slider__arrow_next');
const slidersItem = Array.from(document.getElementsByClassName('slider__item'));
const dots = Array.from(document.getElementsByClassName('slider__dot'));

for (let i of arrows) {
   i.onclick = function () {
      if (i.matches('.slider__arrow_prev')) {
         moveBack (slidersItem, 'slider__item_active');
      } else if (i.matches('.slider__arrow_next')){
         moveForvard(slidersItem, 'slider__item_active');
      };
   };
}

for (let i = 0; i < dots.length; i++) {
   dots[i].onclick = function () {
      if (dots[i].matches('.slider__dot_active')) {
         dots[i].classList.remove('slider__dot_active');
      }
      for (let index of slidersItem) {
         if (index.matches('.slider__item_active')) {
            index.classList.remove('slider__item_active');
         }
      }
      slidersItem[i].classList.add('slider__item_active');
   };
}

let active = 0;
function moveForvard (data, status) {
   for (let i = 0; i < data.length; i++) {
      if (data[i].matches(`.${status}`)) {
         active = data[i];
         active.classList.remove(status);
         if (i === data.length - 1) {
            active = data[0];
         } else {
            active = data[i + 1];
         };
      };
   };
   active.classList.add(status)
};

function moveBack (data, status) {
   for (let i = (data.length - 1); i >= 0; i--) {
      if (data[i].matches(`.${status}`)) {
         active = data[i];
         active.classList.remove(status);
         if (i == 0) {
            active = data[data.length - 1];
         } else {
            active = data[i - 1];
         };
      };
   };
   active.classList.add(status);
};