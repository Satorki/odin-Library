class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  domCreate() {
    //NEW BOOK
    const shelfBook = document.querySelector(".shelf-book");
    const book = document.createElement("div");
    book.classList.add("book");
    shelfBook.appendChild(book);
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
    const bookDown = document.createElement("div")
    bookDown.classList.add("book-down")
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
  }
}
