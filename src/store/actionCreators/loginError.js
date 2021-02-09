import { LOGIN_ERROR_CHANGE } from '../types';

export default function loginError(value) {
  return {
    type: LOGIN_ERROR_CHANGE,
    loginError: value,
  };
}
