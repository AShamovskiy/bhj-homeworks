const tabs = document.getElementsByClassName('tab')
const arrTabs = Array.from(tabs)
const tabContents = document.getElementsByClassName('tab__content')
const arrTabContents = Array.from(tabContents)

// Поясните почему у меня не работает поиск по indexOf?
// let index = arrTabs.indexOf('.tab_active')

document.addEventListener('click', (event) => {
   let click = event.target;
   let index = arrTabs.findIndex((value) => value === click);
   if ((!click.matches('.tab_active')) && (click.matches('.tab'))) {
      for (let i = 0; i < arrTabs.length; i++) {
         if (arrTabs[i].matches('.tab_active')) {
            let active = arrTabs[i];
            active.classList.remove('tab_active');
         }
      }

      for (let i = 0; i < arrTabContents.length; i++) {
         if (arrTabContents[i].matches('.tab__content_active')) {
            let active = arrTabContents[i];
            active.classList.remove('tab__content_active');
         }
      }

      arrTabs[index].classList.add('tab_active')
      arrTabContents[index].classList.add('tab__content_active')
   } else if (click.matches('.tab_active')) {
      if (!arrTabContents.matches('.tab__content_active')) {
         arrTabContents[index].classList.add('tab__content_active');
      }
   } 
})



