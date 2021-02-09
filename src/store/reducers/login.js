import initialState from '../initialState';
import { LOGIN_CHANGE } from '../types';

function login(state = initialState.login, action) {
  switch (action.type) {
    case LOGIN_CHANGE:
      return action.login;

    default:
      return state;
  }
}

export default login;
