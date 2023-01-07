const rotators = [...document.querySelectorAll('.rotator__case')];

function addAttributeColor (object ,item) {
   let color = object.getAttribute(item);
   object.style.color = color;
}

const delay = function addAttributeSpeed () {
   let index = rotators.findIndex((value) => value.matches('.rotator__case_active'))
   if (index === rotators.length -1) {
      let element = rotators[0];
      let speed = element.getAttribute('data-speed');
      return speed;
   } else {
      let element = rotators[index + 1];
      let speed = element.getAttribute('data-speed');
      return speed;
   }
}

function assingClass (object) {
   let index = object.findIndex((value) => value.matches('.rotator__case_active'));
   object[index].classList.remove('rotator__case_active');
   if (index === object.length -1) {
      let element = object[0];
      element.classList.add('rotator__case_active');
      addAttributeColor(element, 'data-color');
   } else {
      let element = object[index + 1];
      element.classList.add('rotator__case_active');
      addAttributeColor(element, 'data-color');
   }
}

function decorator (func) {
   return function (...args) {
      let speed = delay();
      setTimeout(() => {
         func(...args)
         change(rotators)
      }, speed)
   }
}

const change = decorator(assingClass)
change(rotators)
