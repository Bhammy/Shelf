export const selectBookReview = (state, bookId, userId) => {
  let book = state.entities.books[bookId];
  let review = book.reviews.filter( (review) => {
    return review.user_id === userId;
  })[0];
  if (review) {
    return review;
  } else {
    return {
      book_id: bookId,
      user_id: userId,
      rating: null,
      title: "",
      body: "",
    };
  }
};
