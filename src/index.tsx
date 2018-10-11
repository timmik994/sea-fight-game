import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/app';
import './index.css';
import { createStore } from 'redux';
import { gameReducer } from './reducers/gameReducer';
import { Provider } from 'react-redux';
import { createNewGameAction } from './actions/newGameAction';

const store = createStore(gameReducer);
const newGameAction = createNewGameAction();
store.dispatch(newGameAction);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
