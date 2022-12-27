const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const btnsClose = Array.from(document.getElementsByClassName("modal__close_times"));
const btns = Array.from(document.getElementsByClassName('btn'));
// const btnCloseSucces = document.getElementsByClassName('btn_success');

modalMain.classList.add('modal_active');

function remove (arg){
   arg.classList.remove('modal_active')
}

function add (arg){
   arg.classList.add('modal_active')
}

for (let btn of btnsClose) {
   btn.onclick = function () {
      if (modalMain.matches(".modal_active")) {
         remove(modalMain)
      } else if (modalSuccess.matches(".modal_active")) {
         remove(modalSuccess)
      }
   }
}

for (let btn of btns) {
   btn.onclick = function () {
      if (modalMain.matches(".modal_active")) {
         remove(modalMain)
         add(modalSuccess)
      } else if (modalSuccess.matches(".modal_active")) {
         remove(modalSuccess)
      }
   }
}


