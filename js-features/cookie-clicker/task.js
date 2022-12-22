const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
const clickerSpeed = document.getElementById('clicker__speed');

function changeSize () {
   if (cookie.width > 150) {
      cookie.width = 150;
     
   } else {
      cookie.width = 200;
      
   }
}

let time = '';
cookie.onclick = () => {
   
   clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
   changeSize();
   let currentTime = new Date();
   let result = (1 / ((currentTime - time) / 1000)).toFixed(2);
   clickerSpeed.textContent = result;
   time = currentTime;
};