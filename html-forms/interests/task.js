const input = [...document.querySelectorAll('.interest__check')]

function check (e) {
   const element = e.target;
   console.log('check')
   parent (element);
   children(element);
}

function parent (node) {
   console.log(node, 'parent')
}

function children (node) {
   // console.log(node.closest('li').children)
   // if (!node.closest('li').querySelectorAll('ul')) {
   //    return
   // }
   // console.log(node)
   // console.log(node, 'children')
   const ul = node.closest('.interest')
   console.log(ul)
   const children = ul.querySelector('ul')
   console.log(children)
   const a = [...children.querySelectorAll('li > label input')]
   console.log(a)
   a.forEach((e) => {
      node.checked === true? e.checked = true:e.checked = false

      })
}
   



// const checkChild = function(e) {
//    e.checked ? (e.checked = true) : (e.checked = false) 
//    console.log(e.children)
//    if (e.children) {
//       let a = [...e.closest('.interest').children]
//       a.forEach((elem) => {
//          if(elem.querySelector('.interest__check')) {
//             Array.from(elem.querySelectorAll('.interest__check')).forEach((e) => {
//                e.checked === false ? (e.checked = true) : (e.checked = false)
//                console.log(e.closest('.interest').findChild)
//                if (e.closest('.interest').findChild) {
//                   checkChild(e)
//                }

//             })
//          }
//       })
//    }
// }

input.forEach((el) => {
   el.addEventListener('change', (e) => {
   check(e)
   }) 
   
})



