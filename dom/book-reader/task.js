const book = document.getElementById('book')
const fontSize = [...document.querySelectorAll('.font-size')];
const color = document.querySelector('.book__control_color');
const textColor = [...color.querySelectorAll('a')]
const background = document.querySelector('.book__control_background');
const bgColor = [...background.querySelectorAll('a')]


for (let item of fontSize) {
   item.addEventListener('click', takeActive)
}

for (let item of textColor) {
   item.addEventListener('click', takeActive)
}

for (let item of bgColor) {
   item.addEventListener('click', takeActive)
}



function takeActive (e) {
   e.preventDefault()
   let keyAttribute = takeKeyAttribute(e)
   let itemAttribute = takeItemAttribute(e)
   let element = e.target;
   if (keyAttribute === 'size' || keyAttribute === undefined) {
      for (let i of fontSize) {
         if (i.matches('.font-size_active')) {
            i.classList.remove('font-size_active')
         }
         element.classList.add('font-size_active')
         if (itemAttribute === 'small') {
            book.classList.add('book_fs-small')
            book.classList.remove('book_fs-big')
         }
         if (itemAttribute === undefined) {
            book.classList.remove('book_fs-small')
            book.classList.remove('book_fs-big')
         }
         if (itemAttribute === 'big') {
            book.classList.add('book_fs-big')
            book.classList.remove('book_fs-small')
         }
      }
   }

   if (keyAttribute === 'textColor') {
         addClassColor(textColor, itemAttribute, element, 'black', 'gray', 'whitesmoke', 'color_active', 'book_color-black', 'book_color-gray', 'book_color-whitesmoke')
      }
   if (keyAttribute === 'bgColor') {
         addClassColor(bgColor, itemAttribute, element, 'black', 'gray', 'white', 'color_active', 'book_bg-black', 'book_bg-gray', 'book_bg-white')
   }
}


function takeKeyAttribute (e) {
   let element = e.target;
   let attribute = element.dataset
   for (let key in attribute) {
      let keyAttribute = key
      return keyAttribute
      
   }
}

function takeItemAttribute (e) {
   let element = e.target;
   let attribute = element.dataset
   for (let key in attribute) {
      let itemAttribute = attribute[key]
      return itemAttribute
      
   }
}

function addClassColor (object1, object2, object3, attribute1, attribute2, attribute3, classActive, class1, class2, class3) {
   for (let i of object1) {
         if (i.matches('.' + classActive)) {
            i.classList.remove(classActive)
         }
         object3.classList.add(classActive)
         if (object2 === attribute1) {
            book.classList.add(class1)
            book.classList.remove(class2)
            book.classList.remove(class3)
         }
         if (object2 === attribute2) {
            book.classList.remove(class1)
            book.classList.add(class2)
            book.classList.remove(class3)
         }
         if (object2 === attribute3) {
            book.classList.remove(class1)
            book.classList.remove(class2)
            book.classList.add(class3)
         }
      }

}