const items = document.getElementById('items');
const img = document.getElementById('loader');
const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
   if(xhr.readyState === xhr.DONE) {
      img.classList.remove('loader_active')
      let text = JSON.parse(xhr.responseText)
      for (let key in text.response.Valute) {
         items.insertAdjacentHTML('beforeEnd', `<div class="item"><div class="item__code">${text.response.Valute[key].CharCode}</div><div class="item__value">${text.response.Valute[key].Value}</div><div class="item__currency">руб.</div></div>`);
      }
   }
})

xhr.open('GET', ' https://students.netoservices.ru/nestjs-backend/slow-get-courses');

xhr.send();

