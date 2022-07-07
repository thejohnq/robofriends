import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hello from './Hello';
import 'tachyons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hello greetings={'Hello React Ninja'} test={"Great!"} />
    <App />
  </React.StrictMode>
);