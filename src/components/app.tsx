import * as React from 'react';
import { GameStatus } from './gameStatus';
import { GameFieldStatus } from '../containers/gameFieldStatus';
import  '../styles/app.css';

class App extends React.Component {
  public render() {
    return (
      <div className="main-content">
        <GameStatus />
        <GameFieldStatus />
      </div>
    );
  }
}

export default App;
