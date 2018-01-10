export const fetchBooks = () => (
  $.ajax({
    method: "GET",
    url: "api/books"
  })
);

export const fetchBook = (bookId) => (
  $.ajax({
    method: "GET",
    url: `api/books/${bookId}`
  })
);

export const searchBooks = (book) => (
  $.ajax({
    method: "GET",
    url: `api/books/search`,
    data: {
      book
    }
  })
);
