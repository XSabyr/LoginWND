import { combineReducers } from 'redux';
import login from './login';
import password from './password';
import loginError from './loginError';
import passwordError from './passwordError';

const rootReducer = combineReducers({
  login,
  password,
  loginError,
  passwordError,
});

export default rootReducer;
