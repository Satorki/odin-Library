class Library {
  shelf = [];
  addBookToLibrary(book) {
    this.shelf.push(book);
    return this;
  }
  libraryPreview() {
    return this.shelf.forEach((element) => {
      return element;
    });
  }
  addBooks(...books) {
    books.forEach((book) => this.addBookToLibrary(book));
  }
}
