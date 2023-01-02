class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    // this.word = container.querySelectorAll('.symbol');
    // console.log(word)
    // this.counter = container.querySelector('counter')

    this.reset();
    
    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    // this.couner.textContent = this.word.length

  }

  registerEvents() {
    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода слова вызываем this.success()
      При неправильном вводе символа - this.fail();
     */
// Код для назначения секунд из расчета длины слова с учетом ноля если, число меньше 10, для красоты написания
    // const word = [...document.querySelectorAll('.symbol')] ;
    // let numberOfLetters;
    // if (word.length > 9) {
    //   numberOfLetters = word.length
    // } else {
    //   numberOfLetters = "0" + word.length
    // }
    // const counter = document.querySelector('.counter');
    // counter.textContent = numberOfLetters;
 
// Функция для записи изменений времени в HTML код
    // let count = (data) => {
    //   if (data.textContent > 10 ) {
    //     data.textContent -= 1;
    //   } else if (data.textContent > 0) {
    //     data.textContent = "0" + (data.textContent - 1);
    //   }
    // }
// Счетчик времени 
    // let timer  = () => {
    //   if (counter.textContent > 0) {
    //     count(counter);
    //   } else {
    //     clearInterval(timerId)
    //     this.fail()
    //   }
    // }

    // let timerId = setInterval(() => {
    //   timer()
    // }, 1000);



    let takeKey = (e) => {
      let current = this.currentSymbol.textContent
      let key = 0 
      key = e.key;
      if (current === key) {
        this.success();
      } else {
        this.fail();
      }
    }
    
    document.addEventListener('keydown', takeKey)
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();

  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);  
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);
      
    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

