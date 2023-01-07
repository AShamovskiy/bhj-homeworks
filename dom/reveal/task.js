const objects = [...document.querySelectorAll('.reveal')];
const viewport = window.innerHeight;

function isVisible() {
   for (let item of objects) {
      const {top, bottom} = item.getBoundingClientRect();
      if (top > 0 && top < viewport) {
         item.classList.add('reveal_active');
      } else if (bottom > 0 && bottom < viewport) {
         item.classList.add('reveal_active');
      } else {
      item.classList.remove('reveal_active');
      }
   }
}

document.addEventListener('scroll', isVisible);