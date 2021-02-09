import { PASSWORD_CHANGE } from '../types';

export default function password(newPassword) {
  return {
    type: PASSWORD_CHANGE,
    password: newPassword,
  };
}
