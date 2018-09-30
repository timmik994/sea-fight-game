import * as React from 'react';
import { FleetStateComponent } from './FleetStateComponent';
import { PlayerStateComponent } from './PlayerStateComponent';


// Game state component.
export class GameStateComponent extends React.Component {
    public render() {
        return (
            <div className="game-state">
                <PlayerStateComponent />
                <FleetStateComponent />
            </div>
        )
    }
}