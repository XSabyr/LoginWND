import initialState from '../initialState';
import { LOGIN_ERROR_CHANGE } from '../types';

function loginError(state = initialState.loginError, action) {
  switch (action.type) {
    case LOGIN_ERROR_CHANGE:
      return action.loginError;

    default:
      return state;
  }
}

export default loginError;
