import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/app';
import './index.css';
import { createStore } from 'redux';
import { gameReducer } from './reducers/gameReducer';
import { Provider } from 'react-redux';

const store = createStore(gameReducer);

ReactDOM.render(
  <Provider store = {store} >
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
