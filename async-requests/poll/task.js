const poll = document.getElementById('poll__title');
const answers = document.getElementById('poll__answers') ;
let index = 0;
let numberAnswer = 0;

const xhr = new XMLHttpRequest(); 

xhr.addEventListener('readystatechange', () => {
   if (xhr.readyState === xhr.DONE) {
      let response = JSON.parse(xhr.responseText);
      poll.textContent = response.data.title;
      index = response.id;
      let answerText = response.data.answers;
      for (let i of response.data.answers) {
         answers.insertAdjacentHTML('beforeend', `<button class="poll__answer">
            ${i}
            </button>`)
      }
   }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')

xhr.send()

document.addEventListener('click', (e) => {
   if (e.target.matches('.poll__answer')) {
      alert('Спасибо, ваш голос засчитан!')
      const arrAnswer = [...answers.getElementsByClassName('poll__answer')]
      numberAnswer = arrAnswer.findIndex((value) => value === e.target)
      const xhr = new XMLHttpRequest;
      
      xhr.addEventListener('readystatechange', () => {
         if (xhr.readyState === xhr.DONE) {
            console.log(xhr.responseText)
            let response = JSON.parse(xhr.responseText);
            let summVotes = 0;
            for (let item of response.stat) {
               summVotes += Number(item.votes);
            }

            const button = answers.querySelectorAll('button')
            
            for (let item of button) {
               item.remove();
            }

            for (let i of response.stat) {
               let div = document.createElement('div');
               div.textContent = `${i.answer}: ${((Number(i.votes) / summVotes) * 100).toFixed(2)}%`;
               answers.appendChild(div)
            //    answers.insertAdjacentHTML('beforebegin', `<div>
            // ${i.answer}: ${((Number(i.votes) / summVotes) * 100).toFixed(2)}%
            // </div>`);
      }

         }
      })

      xhr.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/poll' );

      xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );

      xhr.send( `vote=${index}&answer=${numberAnswer}` )

   }

   

})



