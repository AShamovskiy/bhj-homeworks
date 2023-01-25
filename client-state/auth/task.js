const form = document.getElementById('signin__form');
const signin = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const buttonExit = document.getElementById('button_exit');

form.addEventListener('submit', (e) => {
   e.preventDefault();
   
   let xhr = new XMLHttpRequest();

   xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === xhr.DONE) {
         let response = JSON.parse(xhr.responseText)
         if (response.success === true) {
            signin.classList.remove('signin_active');
            welcome.classList.add('welcome_active');
            userId.textContent = response.user_id
         } else {
            alert('Неверный логин/пароль')
            form.reset()
         }
      }
   })


   xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth', true);
   var formData = new FormData(form)
   xhr.send(formData)
})

buttonExit.addEventListener('click', () => location.reload())

// form.onsubmit = async (e) => {
//     e.preventDefault();

//     let response = await fetch('https://students.netoservices.ru/nestjs-backend/auth', {
//       method: 'POST',
//       body: new FormData(form)
//     });

//     let result = await response.json();

//     console.log(result);
   
//     if (result.succ)

// }

