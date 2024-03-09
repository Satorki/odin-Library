class Book {
  constructor(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
  }
  domCreate() {
    //NEW BOOK
    const shelfBook = document.querySelector(".shelf-book");
    const bookBox = document.createElement("div");
    bookBox.classList.add("book-box");
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
    //PAGES
    const bookDown = document.createElement("div");
    bookDown.classList.add("book-down");
    const readedPara = document.createElement("p");
    readedPara.classList.add("readed");
    const readedText = document.createTextNode(this.read);
    bookDown.appendChild(readedPara);
    readedPara.appendChild(readedText);
    //READ
    const pagesPara = document.createElement("p");
    pagesPara.classList.add("pages");
    const pagesText = document.createTextNode(this.pages);
    book.appendChild(bookDown);
    bookDown.appendChild(pagesPara);
    pagesPara.appendChild(pagesText);
    //DELETE BUTTON
    const btnBookDelete = document.createElement("button");
    btnBookDelete.id = "bookDelete";
    const btnBookDeleteText = document.createTextNode("remove");
    bookBox.appendChild(btnBookDelete);
    btnBookDelete.appendChild(btnBookDeleteText);
  }
}
