import { LOGIN_CHANGE } from '../types';

export default function login(value) {
  return {
    type: LOGIN_CHANGE,
    login: value,
  };
}
