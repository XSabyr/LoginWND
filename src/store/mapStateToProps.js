function mapStateToProps(component) {
  switch (component) {
    case 'Login': {
      return function (state) {
        return {
          login: state.login,
          password: state.password,
          loginError: state.loginError,
          passwordError: state.passwordError,
        };
      };
    }

    default:
      return null;
  }
}

export default mapStateToProps;
