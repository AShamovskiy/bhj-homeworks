const productQuantityControl = document.querySelectorAll('.product__quantity-control');
const productAdd = document.querySelectorAll('.product__add');
const cartProducts = document.querySelector('.cart__products');
let arr = [];

function increaseOrReduceProduct (e) {
   const parent = e.closest ('.product__quantity-controls')
   const value = parent.querySelector('.product__quantity-value')
   if (e.matches('.product__quantity-control_dec')) {
      if (value.textContent === '1') {
         return
      } else {
         value.textContent = Number(value.textContent) - 1
      }
   }
   if (e.matches('.product__quantity-control_inc')) {
         value.textContent = Number(value.textContent) + 1
      
   }
}

function addProduct (e) {
   const parent = e.closest ('.product');
   const img = parent.querySelector('.product__image').src
   const value = parent.querySelector('.product__quantity-value')
   
   if (arr.includes(Number(parent.dataset.id))) {
      const arrCart = [...document.querySelectorAll('.cart__product')]
      for ( let item of arrCart) {
         if (item.dataset.id === parent.dataset.id) {
            // console.log(item.getBoundingClientRect())
            // const {top, left} = item.getBoundingClientRect();
            // console.log('top:' + top, 'left:' + left)
            // const img = parent.querySelector('.product__image')
            // const topImg = (img.getBoundingClientRect()).top;
            const currentValue = item.querySelector('.cart__product-count')
            currentValue.textContent = Number(currentValue.textContent) + Number(value.textContent)
         }
      }
      return
   }

   cartProducts.insertAdjacentHTML('beforeEnd', `<div class="cart__product" data-id=${parent.dataset.id}>
      <div class="cart__product-cross">&times</div>
      <img class="cart__product-image" src=${img}>
      <div class="cart__product-count">${value.textContent}</div>
      </div>`)
      arr.push(Number(parent.dataset.id))
}

for (let item of productQuantityControl) {
   item.addEventListener('click', (e) => {
      increaseOrReduceProduct(e.target);
      
   })
}

for (let item of productAdd) {
   item.addEventListener('click', (e) => {
      addProduct(e.target)
   })
}

function deleteProduct (e) {
   const parent = e.closest('.cart__product')
   const id = parent.dataset.id
   arr = arr.filter((index) => index != Number(id))
   parent.remove()
}

document.addEventListener('click', (e) => {
   if((e.target).matches('.cart__product-cross')) {
      deleteProduct(e.target)
   }
}) 