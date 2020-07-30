import {
  FETCH_CURRENT_USER,
  USER_DESCRIPTION,
} from './actionTypes';

export const signIn = (currentUser) => async (dispatch) => {
  dispatch({
    type: FETCH_CURRENT_USER,
    payload: currentUser
  })
}

export const signOut = () => async (dispatch) => {
  dispatch({
    type: FETCH_CURRENT_USER,
    payload: {}
  })
  localStorage.removeItem('persist:root')
}