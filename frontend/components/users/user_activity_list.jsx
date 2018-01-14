import React from 'react';

const ActivityList = ({ reviews }) => {

  return Object.values(reviews).map( (review) => {
    if (review.title) {
      return <li key={ review.id }> { review.username } left a review: { `${review.title.slice(0, 30)}...` }</li>
    } else {
      return <li key={ review.id }> { review.username } rated a book: { review.rating }/5 </li>
    }
  });

}

export default ActivityList;
