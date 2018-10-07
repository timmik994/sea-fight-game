import * as React from 'react';
import { GameStatus } from './gameStatus';
import { GameFieldStatus } from '../containers/gameFieldStatus';
import '../styles/app.css';
import { GameEnded } from '../containers/gameEnded';

class App extends React.Component {
  public render() {
    return (
      <div className="main" >
        <div className="main-content">
          <GameStatus />
          <GameFieldStatus />
        </div>
        <GameEnded />
      </div>
    );
  }
}

export default App;
