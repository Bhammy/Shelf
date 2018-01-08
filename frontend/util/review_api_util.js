export const postReview = (review) => (
  $.ajax({
    method: "POST",
    url: `api/books/${review.book_id}/reviews`,
    data: {
      review
    }
  })
);

export const updateReview = (review) => (
  $.ajax({
    method: "PATCH",
    url: `api/books/${review.book_id}/reviews`,
    data: {
      review
    }
  })
);

export const deleteReview = (review) => (
  $.ajax({
    method: "DELETE",
    url: `api/books/${review.book_id}/reviews`,
  })
);
