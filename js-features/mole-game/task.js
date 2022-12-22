const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

for (let index = 1; index < 10; index++) {
   let hole = document.getElementById(`hole${index}`);
   hole.onclick = function() {
      if(hole.className.includes( 'hole_has-mole' )) {
         dead.textContent = Number(dead.textContent) + 1
      } else {
         lost.textContent = Number(lost.textContent) + 1
      }

      if (dead.textContent == 10) {
         alert ('Вы победили');
         dead.textContent = 0
         lost.textContent = 0
      } else if (lost.textContent == 5) {
         alert ('Вы проиграли');
         lost.textContent = 0
         dead.textContent = 0
      }
   }
}

