export const selectBookReview = (state, bookId, userId) => {
  let book = state.entities.books[bookId];
  let blankReview = {
    book_id: bookId,
    user_id: userId,
    rating: null,
    title: "",
    body: "",
  };
  if (book) {
    let review = book.reviews.filter( (review) => {
      return review.user_id === userId;
    })[0];
    if (review) {
      return review;
    } else {
      return blankReview;
    }
  } else {
    return blankReview;
  }
};

export const selectUserReviews = (state, userId) => {
  let userReviews = {};
  Object.values(state.entities.books).forEach( (book) => {
    book.reviews.forEach( (review) => {
      if (review.user_id === userId) {
        userReviews[book.id] = review;
      }
    });
  });
  return userReviews;
};
