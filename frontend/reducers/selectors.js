export const selectBookshelfBooks = (state, shelf) => {
  return shelf.books.map( (bookId) => {
    return state.entities.books[bookId];
  });
};
