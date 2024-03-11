import { Library } from '/classes/library.js';
import { Book } from '/classes/book.js';

//MODAL START
const openModalButton = document.querySelector("#openModal");
const submitModalButton = document.querySelector("#submitModal");
const addModalButton = document.querySelector("#addModal");
const closeModalButton = document.querySelector("#closeModal");
const dialog = document.getElementById("modal");

openModalButton.addEventListener("click", () => {
  dialog.showModal();
});

//DOM SELECT MODAL INPUT
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const radioInputs = document.querySelectorAll("input[type='radio']");

//ADDING BOOK TO LIBRARY
const myLibrary = new Library();
addModalButton.addEventListener("click", (event) => {
  let id = Date.now();
  event.preventDefault();

  let radio = "";
  if (radioInputs[0].checked) {
    radio = "readed";
  } else if (radioInputs[1].checked) {
    radio = "not readed";
  }

  let book = new Book(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    radio
  );
  myLibrary.addBooks(book);
});

//SHOWING BOOKS TO DOM
submitModalButton.addEventListener("click", () => {
  myLibrary.libraryCreate();
  myLibrary.libraryRefresh();
});

//CLOSE MODAL
closeModalButton.addEventListener("click", () => {
  dialog.close();
});