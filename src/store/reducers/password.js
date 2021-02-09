import initialState from '../initialState';
import { PASSWORD_CHANGE } from '../types';

function password(state = initialState.password, action) {
  switch (action.type) {
    case PASSWORD_CHANGE:
      return action.password;

    default:
      return state;
  }
}

export default password;
