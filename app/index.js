import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

main();

function main() {
  const app = document.getElementsByClassName('container')[0];
  ReactDOM.render(<App />, app);
}
