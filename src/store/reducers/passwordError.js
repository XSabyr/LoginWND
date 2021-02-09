import initialState from '../initialState';
import { PASSWORD_ERROR_CHANGE } from '../types';

function passwordError(state = initialState.passwordError, action) {
  switch (action.type) {
    case PASSWORD_ERROR_CHANGE:
      return action.passwordError;

    default:
      return state;
  }
}

export default passwordError;
