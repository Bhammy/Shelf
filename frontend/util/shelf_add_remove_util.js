export const addBookToShelf = (shelf_membership) => (
  $.ajax({
    method: "POST",
    url: `api/books/${shelf_membership.book_id}/shelf_membership`,
    data: {
      shelf_membership
    }
  })
);

export const removeBookFromShelf = (shelf_membership) => (
  $.ajax({
    method: "DELETE",
    url: `api/books/${shelf_membership.book_id}/shelf_membership`,
    data: {
      shelf_membership
    }
  })
);
