import {validation} from './validation.js'

//за нейминг извините

const loadBtn2 = document.querySelector(".js-load2");
const resultsContainer = document.querySelector(".js-results");

let getAxios = (searchValue2) => {
  axios.get(`https://jsonplaceholder.typicode.com/users/${searchValue2}`)
    .then((data) => (resultsContainer.innerHTML =
      `<div class="response-container">
            <p> Id: <span>${data.data.id}</span>
            <p> Имя: <span>${data.data.name}</span><p>
            <p> Город: <span>${data.data.address.city}</span><p>
          </div>`)
    )
}

loadBtn2.addEventListener("click", function (evt) {
  evt.preventDefault();
  const searchInput2 = document.querySelector(".js-input2");
  const searchValue2 = searchInput2.value.trim().toLowerCase();
  validation(searchValue2)
});

export {getAxios}
