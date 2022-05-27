const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");

loadBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  const searchValue = searchInput.value.trim().toLowerCase();
  fetch(`https://api.github.com/users/${searchValue}`)
  .then(response => response.json())
  .then(
    (data) =>
      (resultsContainer.insertAdjacentHTML("afterbegin", `
      <div class="response-container">
          <img src="${data.avatar_url}">
          <p> Имя: <span>${data.name}</span><p>
          <p> О себе: <span>${data.bio}</span><p>
          <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
      </div>`))
  );

});

axios.get(`https://jsonplaceholder.typicode.com/users`)
.then(
  (response) => 
  (response.data.map((user)=>(
    resultsContainer.innerHTML += `
      <div class="response-container">
        <p> Имя: <span>${user.name}</span><p>
        <p> Компания: <span>${user.company.name}</span><p>
        <p> Телефон: <span>${user.phone}</span><p>
      </div>
    `)))

);
