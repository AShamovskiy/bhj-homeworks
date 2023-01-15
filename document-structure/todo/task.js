const form = document.getElementById('tasks__form')
const input =  document.querySelector('.tasks__input');
const list = document.getElementById('tasks__list')

function addTask(item) {
   list.insertAdjacentHTML('beforeEnd', `<div class="task">
   <div class="task__title">${item}</div>
   <a href="#" class="task__remove">&times;</a>
   </div>`)
   form.reset()
}

input.addEventListener('keyup', (e) => {
   if (input.value != '') {
      if (e.key === 'Enter') {
      addTask(input.value)
      }
   }
})

list.addEventListener('click', (e) => {
   let cross = e.target;
   let parent = cross.closest('.task')
   parent.remove()
})