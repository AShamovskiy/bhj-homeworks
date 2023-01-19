const  progress = document.getElementById('progress');
const  form = document.getElementById('form');
const btn = document.getElementById('send');

btn.addEventListener('click', (e) => {
   form.addEventListener('submit', (e) => {
      e.preventDefault()
      const xhr = new XMLHttpRequest(); 

 
      xhr.onprogress = function (event) {
      if (event.loaded === 0) {
         progress.value = 0;
      }
      if (event.loaded < event.total) {
         progress.value = event.loaded / event.total
      }
      if (event.loaded === event.total) {
         progress.value = 1
      }
     }

     xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload')

     const formData = new FormData(form)

     xhr.send(formData)
   })
   
})
