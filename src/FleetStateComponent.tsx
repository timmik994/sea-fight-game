import * as React from 'react';
import { Ship } from './DataModels/Ship';
import { ShipStateComponent } from './ShipStateComponent';


// State of fleet on field.
export class FleetStateComponent extends React.Component<{}, IFleetState>
{
    constructor(props: {}) {
        super(props);
        const ships: Ship[] = [
            new Ship("aircraft", 5, 0),
            new Ship("battleship", 4, 0),
            new Ship("cruiser", 3, 0),
            new Ship("submarine", 3, 0),
            new Ship("carrier", 2, 2)
        ];
        this.state = {
            Ships: ships
        }
    }

    public render() {
        return (
            <div id="fleet-state" className="fleet-state">
                {
                    this.state.Ships.map((ship, i) => <ShipStateComponent key={i} ShipName={ship.Name} LivesCount={ship.LivesCount} HitCount={ship.HitCount} />)
                }
            </div>
        );
    }
}

// State of the FleetStateComponent.
interface IFleetState {
    Ships: Ship[];
}

