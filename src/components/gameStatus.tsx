import * as React from 'react';
import { PlayersStatus } from './playerStatus';
import { FleetStatus } from '../containers/fleetStatus';
import '../styles/gameStatus.css';

// Game state component.
export class GameStatus extends React.Component {
    public render() {
        return (
            <div className="game-state">
                <PlayersStatus />
                <FleetStatus />
            </div>
        );
    }
}