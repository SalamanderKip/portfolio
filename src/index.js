import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'flowbite';

setTimeout(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}, 500);

