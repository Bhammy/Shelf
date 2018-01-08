import { requestBook } from './book_actions';
import { receiveErrors, RECEIVE_ERRORS } from './session_actions';
import * as ReviewAPIUtil from '../util/review_api_util';

export const postReview = (review) => (dispatch) => {
  return ReviewAPIUtil.postReview(review).then( (review) => {
    return dispatch(requestBook(review.book_id));
  }, (errs) => {dispatch(receiveErrors(errs));
  });
};

export const updateReview = (review) => (dispatch) => {
  return ReviewAPIUtil.updateReview(review).then( (review)=> {
    return dispatch(requestBook(review.book_id));
  }, (errs) => { dispatch(receiveErrors(errs));
  });
};
