const input = [...document.querySelectorAll('.interest__check')]

function check (e) {
   const element = e.target;
   
   children(element);
   parent(element);
}

const parent = function (node) {
   const parent = node.closest('.interests').closest('.interest')
   
   if(!parent) {
      return
   }
   const parentCheck = parent.querySelector('.interest__check')
   const sibling = [...node.closest('.interests').querySelectorAll('.interest__check')].map(e => e.checked)
   if (sibling.every(el => el === true)) {
      parentCheck.checked = true
   } else {
      parentCheck.checked = false
      
   }
  
}

const children = function children (node) {
   const ul = node.closest('.interest')
   const children = ul.querySelector('ul')
   
   if (!children) {
      return
   }
   const checkChildren = [...children.querySelectorAll('li > label input')]
   
   checkChildren.forEach((e) => {
      node.checked === true? e.checked = true:e.checked = false
   })
}

input.forEach((el) => {
   el.addEventListener('change', (e) => {
   check(e)
   }) 
   
})


