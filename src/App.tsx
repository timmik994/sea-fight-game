import * as React from 'react';
import { GameStateComponent } from './components/GameStateComponent';
import { GameFieldContainer } from './containers/GameFieldContainer';

class App extends React.Component {
  public render() {
    return (
      <div className="main-content">
          <GameStateComponent />
          <GameFieldContainer />
      </div>
    );
  }
}

export default App;
