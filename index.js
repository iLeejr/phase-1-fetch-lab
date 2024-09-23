function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(books => {
      // for (const dataObj of books) {
      //   const li = document.createElement("li")
      //   const h3 = document.createElement("h3")
      //   h3.textContent = dataObj.name
      //   li.append(h3)
      //   document.querySelector("main").append(li)
      // }


renderBooks(books)
    })
    .catch(error => alert(error))
}





function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  fetchBooks();
});
