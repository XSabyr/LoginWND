import React, { useState, useRef } from 'react';

function Error(props) {
  return (
    <span className="'error" style={{ color: 'red' }}>
      {props.text}
    </span>
  );
}

function App() {
  // eslint-disable-next-line
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const formRef = useRef(null);

  function validateAndSend(event) {
    event.preventDefault();
    if (!re.test(String(emailRef.current.value).toLowerCase())) {
      setEmailError(true);
      return false;
    }
    setEmailError(false);

    if (!passwordRef.current.value) {
      setPasswordError(true);
      return false;
    }

    setPasswordError(false);

    const obj = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(JSON.stringify(obj));
  }

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  return (
    <div>
      <form ref={formRef} onSubmit={validateAndSend}>
        <section>
          <label>
            Email:
            <input type="text" id="email" ref={emailRef} />
          </label>
          {emailError && <Error text="Should be an email" />}
        </section>
        <section>
          <label>
            Password:
            <input type="text" id="password" ref={passwordRef} />
          </label>
          {passwordError && <Error text="Cannot be blank" />}
        </section>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

export default App;

// const generateError = (text) => {
//   const error = document.createElement('span');
//   error.className = 'error';
//   error.style.color = 'red';
//   error.innerHTML = text;
//   return error;
// };

// const removeValidation = () => {
//   const errors = formRef.current.querySelectorAll('.error');
//   for (let i = 0; i < errors.length; i++) {
//     errors[i].remove();
//   }
// };

// removeValidation();

// if (!emailRef.current.value) {
//   emailRef.current.after(generateError('Cannot be blank'));
//   return false;
// } else

// emailRef.current.after(generateError('Should be an Email'));
// passwordRef.current.after(generateError('Cannot be blank'));
