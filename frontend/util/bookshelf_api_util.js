export const fetchBookshelves = (userId) => (
  $.ajax({
    method: "GET",
    url: `api/users/${userId}/bookshelves`
  })
);

export const fetchBookshelf = (bookshelfId) => (
  $.ajax({
    method: "GET",
    url: `api/bookshelves/${bookshelfId}`
  })
);

export const createBookshelf = (bookshelf) => (
  $.ajax({
    method: "POST",
    url: "api/bookshelves",
    data: { bookshelf }
  })
);

export const updateBookshelf = (bookshelf) => (
  $.ajax({
    method: "PATCH",
    url: `api/bookshelves/${bookshelf.id}`,
    data: { bookshelf }
  })
);

export const deleteBookshelf = (bookshelfId) => (
  $.ajax({
    method: "DELETE",
    url: `api/bookshelves/${bookshelfId}`
  })
);
