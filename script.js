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
const radioInputs = document.querySelectorAll("input[type='radio']");

//ADDING BOOK TO LIBRARY
const myLibrary = new Library();
addModalButton.addEventListener("click", (event) => {
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
    radio,
  );
  myLibrary.addBooks(book);
});

//SHOWING BOOKS TO DOM
closeModalButton.addEventListener("click", () => {
  myLibrary.libraryPreview();
  dialog.close();
});

//DELETING BOOKS
const deleteBookButton = document.querySelector("#deleteBook");
let deletedBookButtonChecked = false;

deleteBookButton.addEventListener("click", () => {
  if (!deletedBookButtonChecked) {
    deleteBookButton.style.backgroundColor = "red";
    deletedBookButtonChecked = true;
  } else {
    deleteBookButton.style.backgroundColor = "";
    deletedBookButtonChecked = false;
  }

  console.log(myLibrary);
});
