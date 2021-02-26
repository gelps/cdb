import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Navigation from './components/navigation/Navigation.js';

ReactDOM.render(
  <React.StrictMode>
    <Navigation/>
    <App/>
  </React.StrictMode>,
  document.getElementById('cdb-intro')
);
