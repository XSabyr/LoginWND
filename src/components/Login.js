import React from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from '../store/mapDispatchToProps';
import mapStateToProps from '../store/mapStateToProps';

function Error(props) {
  return (
    <span className="'error" style={{ color: 'red' }}>
      {props.text}
    </span>
  );
}

function Login({
  login,
  password,
  loginError,
  passwordError,
  changeLogin,
  changePassword,
  changeLoginError,
  changePasswordError,
}) {
  // eslint-disable-next-line
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  function validateAndSend(event) {
    event.preventDefault();
    if (!re.test(String(login).toLowerCase())) {
      changeLoginError(true);
      return false;
    }
    changeLoginError(false);

    if (!password) {
      changePasswordError(true);
      return false;
    }
    changePasswordError(false);

    const obj = {
      email: login,
      password: password,
    };
    console.log(JSON.stringify(obj));
  }

  return (
    <div>
      <form onSubmit={validateAndSend}>
        <section>
          <label>
            Email:
            <input
              type="text"
              id="email"
              value={login}
              onChange={(event) => changeLogin(event.target.value)}
            />
          </label>
          {loginError && <Error text="Should be an email" />}
        </section>
        <section>
          <label>
            Password:
            <input
              type="text"
              id="password"
              value={password}
              onChange={(event) => changePassword(event.target.value)}
            />
          </label>
          {passwordError && <Error text="Cannot be blank" />}
        </section>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

export default connect(mapStateToProps('Login'), mapDispatchToProps('Login'))(Login);
