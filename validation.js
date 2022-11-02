import {getAxios} from './axios.js'

const errParagraph = document.querySelector(".js-error")

const validation = (searchValue2) => {
  try {
    if (searchValue2 === '') {
      throw new Error('Поле ввода пустое')
    } if (isNaN(searchValue2)) {
      throw new Error('В поле ввода не число')
    } if (5 > searchValue2 || searchValue2 > 10) {
      throw new Error('В поле ввода меньше 5/ больше 10')
    }
    errParagraph.innerHTML = ''
    getAxios(searchValue2)
  } catch (err) {
    errParagraph.innerHTML = err.message}
}

export {validation}
