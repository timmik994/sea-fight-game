import * as React from 'react';
import { ShipLives } from './shipLives';
import '../styles/shipStatus.css';

// Shows state of ship on game field.
export class ShipStatus extends React.Component<ShipStatusProps> {
  public render() {
    return (
      <div className="ship-state">
        <div className={'ship ' + this.props.shipName} />
        <ShipLives livesCount={this.props.livesCount} hitCount={this.props.hitCount} />
      </div>
    );
  }
}

// Properties of ship.
interface ShipStatusProps {
  // Name of the ship.
  shipName: string;
  // Ship lives count.
  livesCount: number;
  // Count of hits in this ship.
  hitCount: number;
}
