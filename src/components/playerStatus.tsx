import * as React from 'react';
import { Player } from './player';
import { PlayerColor } from '../enums/playerColor';
import '../styles/playersStatus.css';

// Static player state view.
export class PlayersStatus extends React.Component {
  public render() {
    return (
      <div id="players" className="players">
        <Player color={PlayerColor.Yellow} name="player 1" points={0} />
        <Player color={PlayerColor.Green} name="player 2" points={0} />
      </div>
    );
  }
}
