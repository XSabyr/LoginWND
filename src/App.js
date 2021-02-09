import React from 'react';
import { Provider } from 'react-redux';
import Login from './components/Login';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}

export default App;
