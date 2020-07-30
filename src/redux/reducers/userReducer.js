import {
  FETCH_CURRENT_USER,
  USER_DESCRIPTION,
} from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
  currentUser: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    case USER_DESCRIPTION:
      return {
        ...state
      }
    default:
      return state
  }
}