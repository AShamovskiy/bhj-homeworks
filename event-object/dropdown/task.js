const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItem = document.querySelectorAll('.dropdown__item');

dropdownValue.addEventListener('click', function () {
   dropdownList.classList.add('dropdown__list_active')
});

for (let index of dropdownItem) {
   index.addEventListener('click', function (event) {
      event.preventDefault();
      const link = index.querySelector('.dropdown__link')
      let text = link.textContent;
      dropdownValue.textContent = text;
      dropdownList.classList.remove('dropdown__list_active')
   })
}

