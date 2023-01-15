const helps = [...document.querySelectorAll('.has-tooltip')]
const toolTip = document.querySelector('.tooltip')

function addTooltip (item, comment, top, left) {
   item.classList.add('tooltip_active')
   item.style.top = top + 5 + 'px'
   item.style.left = left + 'px'
   item.innerText = comment
}



for (let item of helps) {
   item.addEventListener('click', (e) => {
      e.preventDefault()
      console.log(item.getBoundingClientRect())
      let {left, bottom} = item.getBoundingClientRect()
      let comment = item.title
      addTooltip(toolTip, comment, bottom, left)
   })
}