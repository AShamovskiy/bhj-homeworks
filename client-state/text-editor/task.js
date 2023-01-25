const textArea = document.getElementById('editor');
const btn = document.getElementById('button');

function save (key, obj) {
   if (localStorage.key(key)) {
      localStorage.clear(key)
   }
   let text = obj
   localStorage.setItem(key, text)
}

function restore (key) {
   textArea.value = localStorage.getItem(key)
}


textArea.addEventListener('keyup', () => {
   save('key', textArea.value)
}) 

window.onload = function () {
   restore('key')
}

btn.addEventListener('click', (e) => {
   textArea.value = ''
})

btn.addEventListener('focus', () => {
   setTimeout(() => {
      
      btn.style.backgroundColor = 'rgb(232, 232, 225)'
   }, 100)
   btn.style.backgroundColor = 'red'
});



