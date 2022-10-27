const loadBtn2 = document.querySelector(".js-load2");
const searchInput2 = document.querySelector(".js-input2");

loadBtn2.addEventListener("click", function (evt) {
  evt.preventDefault();
  const searchValue = searchInput2.value.trim().toLowerCase();

  axios.get(`https://jsonplaceholder.typicode.com/posts/${searchValue}`)
    .then((data) => (resultsContainer.innerHTML =
      `<div class="response-container">
          <p> Id <span>${data.data.id}</span>
          <p> заголовок: <span>${data.data.title}</span><p>
          <p> текст: <span>${data.data.body}</span><p>
        </div>`)
    )
});
