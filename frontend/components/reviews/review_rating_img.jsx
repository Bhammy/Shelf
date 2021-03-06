import React from 'react';

const ReviewRatingImage = ({ rating }) => {

  let imgArr = []
  for (var i = 0; i < parseInt(rating); i++) {
    imgArr.push(<img src={window.staticImages.lib24} key={ i }/>);
  }

  for (var i = imgArr.length - 1; i < 4; i++) {
    imgArr.push(<img src={window.staticImages.libbw24} key={i}/>);
  }

  return(
    <span className="ratingImg">
      { imgArr } <h4><i>({ rating } / 5)</i></h4>
    </span>
  )
};

export default ReviewRatingImage;
