import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const initialState = {
  currentUser: null,
};

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({}, state, { currentUser: action.currentUser });
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
