const links = document.getElementsByClassName('menu__link')

for (let index of links) {
   index.onclick = function () {
      const parent = index.closest('.menu__item')
      let elem = parent.querySelector('.menu_sub');
      if (elem == null) {
         return
      }
      if (elem.matches('.menu_active')) {
         elem.classList.remove('menu_active');
         return false;
      }

      for (let i of links) {
         const anotherParent = i.closest('.menu__item');
         if (anotherParent.querySelector('.menu_sub')) {
            let element = anotherParent.querySelector('.menu_sub')
            element.classList.remove('menu_active');
            
         };
      };
      
      elem.classList.add('menu_active');
      return false;
      
   };
}