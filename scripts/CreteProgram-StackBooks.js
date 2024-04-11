let StackBooks = [];

function Book(name, author, synopsis) {
    this.Name = name;
    this.Author = author;
    this.Synopsis = synopsis;
}

function AddBook(name, author, synopsis) {
    const newBook = new Book(name, author, synopsis);
    StackBooks.push(newBook);
}

function DeleteLastBook() {
    StackBooks.pop();
}

AddBook("DAS", "Autor1", "Sinopsis1");
AddBook("Libro2", "Autor2", "Sinopsis2");
AddBook("Libro3", "Autor3", "Sinopsis3");

if (StackBooks.length === 0) {
    console.log("The Array is empty");
    return;
}

DeleteLastBook();
console.log(StackBooks);
