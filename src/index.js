import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';

//const store = createStore()

ReactDOM.render(
    <App />, 
  document.getElementById('root')
);
registerServiceWorker();
