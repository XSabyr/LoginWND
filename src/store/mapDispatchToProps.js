import { bindActionCreators } from 'redux';
import loginError from './actionCreators/loginError';
import password from './actionCreators/password';
import passwordError from './actionCreators/passwordError';
import login from './actionCreators/login';

export default function mapDispatchToProps(component) {
  switch (component) {
    case 'Login':
      return function (dispatch) {
        return {
          changeLogin: bindActionCreators(login, dispatch),
          changePassword: bindActionCreators(password, dispatch),
          changeLoginError: bindActionCreators(loginError, dispatch),
          changePasswordError: bindActionCreators(passwordError, dispatch),
        };
      };

    default:
      return null;
  }
}
