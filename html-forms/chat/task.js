const chatWidget = document.querySelector('.chat-widget');
const chatWidgetInput = document.getElementById('chat-widget__input')
const chatWidgetMessages = document.getElementById('chat-widget__messages')
const chatWidgetMessagesContainer = document.querySelector('.chat-widget__messages-container')
let arr = [];

let textRobots = [
   'Я устал, пока.',
   'Вы мне надоели',
   'Пишите на деревню бабушке',
   'Зачем вы мне пишите',
   'Я вас внимательно слушаю',
   'Какие вы сложные'
]

function isActionChat (e) {
   if (!chatWidget.matches('.chat-widget_active')) {
      chatWidget.classList.toggle('chat-widget_active')
      addMessages(createMessageRobot)
     
   }
}

function createTimeMessage () {
   let time = new Date()
   let h = time.getHours < 10? '0' + time.getHours(): time.getHours();
   let m = time.getMinutes() < 10? '0' + time.getMinutes(): time.getMinutes();
   let timeMessage = h + ':' + m;
   return timeMessage
}

function createMessageRobot () {
   let time = createTimeMessage();
   let index = Math.floor (Math.random () * ((textRobots.length - 1) - 0 + 1)) + 0;
   let text = textRobots[index]
   
   if (arr.length === 0) {
       if (time < '12:00') {
         text = 'Доброе утро!'
      } else if ('12:00' < time < '18:00') {
         text = 'Добрый день!'
      } else if ( time > '18:00') {
         text = 'Добрый вечер!'
      }
      let message = `<div class="message">
      <div class="message__time">${time}</div>
      <div class="message__text">${text}</div>
      </div>`
       return message
   } else {
      let message = `<div class="message">
      <div class="message__time">${time}</div>
      <div class="message__text">${text}</div>
      </div>`
      return message
   }
}

function createMessageClient () {
   let time = createTimeMessage();
   let text = chatWidgetInput.value
   let message = `<div class="message message_client">
      <div class="message__time">${time}</div>
      <div class="message__text">${text}</div>
   </div>`
   return message
}

function createMessageAsk () {
   let time = createTimeMessage();
   let message = `<div class="message">
      <div class="message__time">${time}</div>
      <div class="message__text">Вы там уснули?</div>
   </div>`
   return message
}

function addMessages (func) {
   let message = func()
   chatWidgetMessages.innerHTML  += message;
}

chatWidget.addEventListener('click', isActionChat)

chatWidgetInput.addEventListener('keyup', (e) => {
   debounce(createMessageAsk)
   arr = [...document.getElementsByClassName('message')]
      
   if (chatWidgetInput.value !== '') {
      if (e.key === 'Enter') {
      addMessages(createMessageClient)
      chatWidgetInput.value = '';
      addMessages(createMessageRobot)
      arr = [...document.getElementsByClassName('message')]
      arr[arr.length - 1].scrollIntoView()
      }
   }
}) 

function debouceDecorator (func) {
   let timeOut = null;
   return function (...args) {
      if (timeOut) {
         clearTimeout(timeOut)
      }
      timeOut = setTimeout(() => {
         timeOut =null;
         func(...args)
         arr = [...document.getElementsByClassName('message')]
         arr[arr.length - 1].scrollIntoView()

      }, 30000)
   }
}

let debounce = debouceDecorator(addMessages)


