import * as React from 'react';
import { ShipStatus } from './shipStatus';
import '../styles/fleet.css';
import { Ship } from '../reducers/gameReducer';

// State of fleet on field.
export class Fleet extends React.Component<FleetProps, {}> {
  public render() {
    return (
      <div id="fleet-state" className="fleet-state">
        {
          this.props.ships.map((ship, i) =>
            <ShipStatus key={i} shipName={ship.name} livesCount={ship.livesCount} hitCount={ship.hitCount} />)
        }
      </div>
    );
  }
}

// State of the FleetStateComponent.
interface FleetProps {
  ships: Ship[];
}
