const arrows = Array.from(document.getElementsByClassName('slider__arrow'));
const arrowPrev = document.getElementsByClassName('slider__arrow_prev');
const arrowNext = document.getElementsByClassName('slider__arrow_next');
const slidersItem = Array.from(document.getElementsByClassName('slider__item'));
const dots = Array.from(document.getElementsByClassName('slider__dot'));

let activeIndex = slidersItem.findIndex(index => index.matches('.slider__item_active'));
function takeSlider (number) {
   slidersItem[activeIndex].classList.remove('slider__item_active');
   if (dots[activeIndex].matches('.slider__dot_active')) {
         dots[activeIndex].classList.remove('slider__dot_active');
      } 
   slidersItem[number].classList.add('slider__item_active')
   dots[number].classList.add('slider__dot_active')
   activeIndex = number;
}

for (let i of arrows) {
   i.onclick = function () {
      if (i.matches('.slider__arrow_prev')) {
         if (activeIndex == 0) {
            takeSlider(slidersItem.length -1)
         } else {
            takeSlider(activeIndex - 1)
         }
         
      } else if (i.matches('.slider__arrow_next')){
         if (activeIndex == slidersItem.length - 1) {
            takeSlider(0)
         } else {
            takeSlider(activeIndex + 1)
         }
      };
   };
}

for (let i = 0; i < dots.length; i++) {
   dots[i].onclick = function () {
      takeSlider(i)
   }
}