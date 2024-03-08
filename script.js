const openModalButton = document.querySelector("#openModal");
const closeModalButton = document.querySelector("#closeModal");
const addModalButton = document.querySelector("#addModal");
const dialog = document.getElementById("modal");

openModalButton.addEventListener("click", () => {
  dialog.showModal();
});

closeModalButton.addEventListener("click", () => {
  dialog.close();
});

addModalButton.addEventListener("click", (event) => {
    event.preventDefault();
})

const book1 = new Book("aaa", "bbb", 123);
const myLibrary = new Library();

myLibrary.addBooks(book1);

console.log(myLibrary);
