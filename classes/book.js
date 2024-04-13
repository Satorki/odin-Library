class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  domCreate() {
    const bookId = "bookDelete_" + Date.now();
    //NEW BOOK
    const shelfBook = document.querySelector(".shelf-book");
    const bookBox = document.createElement("div");
    bookBox.classList.add("book-box");
    bookBox.id = bookId;
    const book = document.createElement("div");
    book.classList.add("book");
    shelfBook.appendChild(bookBox);
    bookBox.appendChild(book);
    //TITLE
    const titlePara = document.createElement("p");
    titlePara.classList.add("title");
    const titleText = document.createTextNode(this.title);
    book.appendChild(titlePara);
    titlePara.appendChild(titleText);
    //AUTHOR
    const authorPara = document.createElement("p");
    authorPara.classList.add("author");
    const authorText = document.createTextNode(this.author);
    book.appendChild(authorPara);
    authorPara.appendChild(authorText);
    //READ
    const bookDown = document.createElement("div");
    bookDown.classList.add("book-down");
    const readedPara = document.createElement("p");
    readedPara.classList.add("readed");
    const readedCheckbox = document.createElement("input");
    readedCheckbox.type = "checkbox";
    readedCheckbox.checked = this.read;
    const readedText = document.createTextNode("Readed:");
    bookDown.appendChild(readedPara);
    readedPara.appendChild(readedText);
    bookDown.appendChild(readedCheckbox);
    //PAGES
    const pagesPara = document.createElement("p");
    pagesPara.classList.add("pages");
    const pagesText = document.createTextNode(this.pages);
    book.appendChild(bookDown);
    bookDown.appendChild(pagesPara);
    pagesPara.appendChild(pagesText);
    //DELETE BUTTON
    const btnBookDelete = document.createElement("button");
    btnBookDelete.id = bookId;
    const btnBookDeleteText = document.createTextNode("remove");
    btnBookDelete.appendChild(btnBookDeleteText);
    bookBox.appendChild(btnBookDelete);
    btnBookDelete.addEventListener("click", () => {
      if (bookBox.id === btnBookDelete.id) {
        bookBox.remove();
      }
    });
  }
}

export { Book };
