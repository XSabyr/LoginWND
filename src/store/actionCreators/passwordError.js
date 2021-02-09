import { PASSWORD_ERROR_CHANGE } from '../types';

export default function passwordError(value) {
  return {
    type: PASSWORD_ERROR_CHANGE,
    passwordError: value,
  };
}
