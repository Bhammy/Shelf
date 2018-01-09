import React from 'react';

const ReviewRating = ({ setRating, rating, bookId }) => {
  return (
    <div className="review-form-rating">
        <input type="radio" value={5} name={`rating-${bookId}`}
          onClick={ setRating }
          className="rating-input"
          id="rating-input-5"
          defaultChecked={ (rating === 5 ) } />
      <label className="rating-img" htmlFor="rating-input-5">
      </label>

        <input type="radio" value={4} name={`rating-${bookId}`}
          onClick={ setRating }
          className="rating-input"
          id="rating-input-4"
          defaultChecked={ (rating === 4 ) } />
      <label className="rating-img" htmlFor="rating-input-4">
      </label>

        <input type="radio" value={3} name={`rating-${bookId}`}
          onClick={ setRating }
          className="rating-input"
          id="rating-input-3"
          defaultChecked={ (rating === 3 ) } />
      <label className="rating-img" htmlFor="rating-input-3">
      </label>

        <input type="radio" value={2} name={`rating-${bookId}`}
          onClick={ setRating }
          className="rating-input"
          id="rating-input-2"
          defaultChecked={ (rating === 2 ) } />
      <label className="rating-img" htmlFor="rating-input-2">
      </label>

        <input type="radio" value={1} name={`rating-${bookId}`}
          onClick={ setRating }
          className="rating-input"
          id="rating-input-1"
          defaultChecked={ (rating === 1 ) } />
      <label className="rating-img" htmlFor="rating-input-1">
      </label>
    </div>
  );
};

export default ReviewRating;
