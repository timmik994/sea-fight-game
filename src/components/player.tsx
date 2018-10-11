import * as React from 'react';
import { PlayerColor } from '../enums/playerColor';
import '../styles/player.css';

export class Player extends React.Component<PlayerProps, {}> {
  public render() {
    return (
      <div className={`player-state ${this.getColorClass()}`}>
        <div className="player-points">{this.formatNumber(this.props.points)}</div>
        <div className="line" />
        <div className="player-name">{this.props.name}</div>
      </div>
    );
  }

  private formatNumber(num: number): string {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num.toString();
    }
  }

  private getColorClass(): string {
    switch (this.props.color) {
      case PlayerColor.Green: return 'green-player-state';
      case PlayerColor.Yellow: return 'yellow-player-state';
      default: return '';
    }
  }

}

interface PlayerProps {
  // Player points.
  points: number;
  // Player name.
  name: string;
  // Color of player state.
  color: PlayerColor;
}
