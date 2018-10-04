import * as React from 'react';
import { ShipLivesComponent } from './ShipLivesComponent';

// Shows state of ship on game field.
export class ShipStateComponent extends React.Component<IShipStateProps> {
    public render() {
        return(
            <div className="ship-state">
                <div className= {'ship ' + this.props.ShipName} />
                <ShipLivesComponent LivesCount = {this.props.LivesCount} HitCount = {this.props.HitCount} />
            </div>
        );
    }
}

// Properties of ship.
interface IShipStateProps {
    // Name of the ship.
    ShipName: string;

    // Ship lives count.
    LivesCount: number;

    // Count of hits in this ship.
    HitCount: number;
}