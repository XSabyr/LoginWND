import React, { useState, useRef } from 'react';

function App() {
  // eslint-disable-next-line
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const formRef = useRef(null);

  const generateError = (text) => {
    const error = document.createElement('span');
    error.className = 'error';
    error.style.color = 'red';
    error.innerHTML = text;
    return error;
  };

  const removeValidation = () => {
    const errors = formRef.current.querySelectorAll('.error');
    for (let i = 0; i < errors.length; i++) {
      errors[i].remove();
    }
  };

  function validateAndSend(event) {
    event.preventDefault();
    removeValidation();

    if (!emailRef.current.value) {
      emailRef.current.after(generateError('Cannot be blank'));
      return false;
    } else if (!re.test(String(emailRef.current.value).toLowerCase())) {
      emailRef.current.after(generateError('Should be an Email'));
      return false;
    }

    if (!passwordRef.current.value) {
      passwordRef.current.after(generateError('Cannot be blank'));
      return false;
    }

    const obj = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(JSON.stringify(obj));
  }

  return (
    <div>
      <form ref={formRef}>
        <section>
          <label>
            Email:
            <input
              type="text"
              id="email"
              ref={emailRef}
            />
          </label>
        </section>
        <section>
          <label>
            Password:
            <input
              type="text"
              id="password"
              ref={passwordRef}
            />
          </label>
        </section>
        <button type="submit" onClick={validateAndSend}>
          Отправить
        </button>
      </form>
    </div>
  );
}

export default App;
