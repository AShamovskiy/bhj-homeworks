const links = document.getElementsByClassName('menu__link')

for (let index of links) {
   index.onclick = function () {
      for (let i of links) {
         const anotherParent = i.closest('.menu__item');
         if (anotherParent.querySelector('.menu_sub')) {
            let element = anotherParent.querySelector('.menu_sub')
            element.classList.remove('menu_active');
         };
      };

      const parent = index.closest('.menu__item')
      if (parent.querySelector('.menu_sub')) {
         let elem = parent.querySelector('.menu_sub');
         elem.classList.add('menu_active');
         return false;
      };
      
   };
}