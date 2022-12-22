const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

hours.textContent = "00";
minutes.textContent = "00";
seconds.textContent = "10";

function counter (data) {
   if (data.textContent > 10 ) {
      data.textContent -= 1;
   } else if (data.textContent > 0) {
      data.textContent = "0" + (data.textContent - 1);
   }
}

function  timer () {
   if (hours.textContent >= 0 && minutes.textContent >= 0 && seconds.textContent > 0) {
      counter(seconds);
   } else if (hours.textContent >= 0 && minutes.textContent > 0 && seconds.textContent == 0) {
      seconds.textContent = "59"
      counter(minutes);
   } else if (hours.textContent > 0 && minutes.textContent == 0 && seconds.textContent == 0) {
      seconds.textContent = "59";
      minutes.textContent = "59";
      counter(hours)
   } else {
      alert("«Вы победили в конкурсе!")
      clearInterval(timerId)
      // location.reload()
      location.assign("https://www.google.com/?hl=ru")
      
   }
}

let timerId = setInterval(() => {
   timer(seconds)
}, 1000);


// setInterval(() => {
//    const timer = document.getElementById('timer');
//    let timerText = Number(timer.textContent)
//    if (timerText > 0) {
//       timerText = timerText - 1
//       timer.innerText = String(timerText)
   
//    } else {
//       alert("«Вы победили в конкурсе!")
//       clearInterval()
//       return timer.innerText = "10"
//    }
// }, 1000);

//