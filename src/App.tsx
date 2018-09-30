import * as React from 'react';
import { GameFieldComponent } from './GameField';
import { GameStateComponent } from './GameStateComponent';

class App extends React.Component {
  public render() {
    return (
      <div className="main-content">
          <GameStateComponent />
          <GameFieldComponent />
      </div>
    );
  }
}

export default App;
