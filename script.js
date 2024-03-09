//MODAL START
const openModalButton = document.querySelector("#openModal");
const closeModalButton = document.querySelector("#closeModal");
const addModalButton = document.querySelector("#addModal");
const dialog = document.getElementById("modal");

openModalButton.addEventListener("click", () => {
  dialog.showModal();
});

//DOM SELECT MODAL INPUT
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");

//ADDING BOOK TO LIBRARY
const myLibrary = new Library();
addModalButton.addEventListener("click", (event) => {
  event.preventDefault();
  let book = new Book(titleInput.value, authorInput.value, pagesInput.value);
  myLibrary.addBooks(book);
});

//SHOWING BOOKS TO DOM
closeModalButton.addEventListener("click", () => {
  console.log(myLibrary.libraryPreview());
  myLibrary.libraryPreview();
  dialog.close();
});
