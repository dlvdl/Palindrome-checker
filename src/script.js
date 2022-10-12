const inputField = document.querySelector('.inputbox__input')
const checkButton = document.querySelector('.inputbox__button')
const infoField = document.querySelector('.info_txt')
const polindromWord = document.querySelector('.polindrom_word')
let filterString

inputField.addEventListener('keyup', () => {
  filterString = inputField.value.replace(/[^A-ZА-Я0-9]/gi, '').toLowerCase()
  if (filterString) {
    return checkButton.classList.add('active')
  }
  checkButton.classList.remove('active')
})

inputField.addEventListener('focus', () => {
  infoField.innerHTML = ''
})

checkButton.addEventListener('click', () => {
  let replacedString = filterString.split('').reverse().join('')

  if (replacedString == filterString) {
    infoField.innerHTML = `Yes, <span class = 'polindrom_word'>'${filterString}'</span> is a palindrome word`
    infoField.style.display = 'block'
    return console.log('Polindrom')
  }
  infoField.innerHTML = `No, <span class = 'polindrom_word'>'${filterString}'</span> is not a palindrome word`
})
