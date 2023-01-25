const modalContent = document.querySelector('.modal__content');
const modalClose = document.querySelector('.modal__close');
const modal = document.getElementById('subscribe-modal');

let cookie = document.cookie

if (cookie === 'modal=close') {
   remove();
} else {
   add();
}

function add () {
   modal.classList.add('modal_active');
};

function remove () {
   modal.classList.remove('modal_active');
   
}

modalClose.addEventListener('click', () => {
   remove()
   document.cookie = 'modal = close'
})