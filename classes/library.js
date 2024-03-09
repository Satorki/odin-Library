class Library {
  shelf = [];
  addBookToLibrary(book) {
    this.shelf.push(book);
    return this;
  }
  libraryCreate() {
    return this.shelf.forEach((element) => {
      return element.domCreate();
    });
  }
  libraryRefresh() {
    return this.shelf = [];
  }
  addBooks(...books) {
    books.forEach((book) => this.addBookToLibrary(book));
  }
}
