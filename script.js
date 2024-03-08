// MODAL
const openModalButton = document.querySelector("#openModal");
const closeModalButton = document.querySelector("#closeModal");
const addModalButton = document.querySelector("#addModal");
const dialog = document.getElementById("modal");

openModalButton.addEventListener("click", () => {
  dialog.showModal();
});



// BOOK ADD
// ok teraz muszę:
// 1. wybrać input tytułu
const titleInput = document.querySelector("#title");
// 2. wybrać input autora
const authorInput = document.querySelector("#author");
// 3. wybrać input stron int
const pagesInput = document.querySelector("#pages");
// 4. wybrać input czy przeczytał true
const readedFieldset = document.querySelector("fieldset");
const readedRadio = document.querySelectorAll("input[type='radio']");
let radioChecked = Array.from(readedRadio).map(radio => {
    if (radio.checked) { return radio.id}
})

// LIBRARY SHOW

closeModalButton.addEventListener("click", () => {
  console.log(myLibrary);
  dialog.close();
});
// const title = document.createElement("p");
// title.classList.add("title");
// const text = document.createTextNode(titleInput);
// title.appendChild(text);

// const base = document.querySelector(".shelf-book")
// base.appendChild(title)

// <div class="book">
//   <p class="title">Enders Game</p>
//   <p class="author">by Orson Scott Card long name</p>
//   <div class="book-down">
//     <p class="readed">readed</p>
//     <p class="pages">300</p>
//   </div>
// </div>

// zrobic funkcje po nacisnieciu ktorej:
// 1. tworzy nową ksiązkę w array shelf w library
// Book klasa
// 2. wyświetla te ksiązke w biblitece na html

const myLibrary = new Library();

addModalButton.addEventListener("click", (event) => {
  event.preventDefault();
  let book = new Book(titleInput.value, authorInput.value, pagesInput.value, radioChecked);
  myLibrary.addBooks(book);
});

// //let book = new Book(titleInput, authorInput, pagesInput);
// const myLibrary = new Library();
// console.log(myLibrary);