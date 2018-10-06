import * as React from 'react';
import { GameCell } from './gameCell';
import { CellState } from '../enums/cellState';
import '../styles/seaField.css';

// Game field.
export class GameField extends React.Component<SeaFieldProps, {}> {
    public render() {
        return (
            <div id="game-field" className="game-field">
                {
                    this.props.cells.map((cellState, i) => <GameCell onShoot={this.props.onShoot} id={i} state={cellState} key={i} />)
                }
            </div>
        );
    }

}

export interface SeaFieldProps {
    // Array of cell states.
    cells: CellState[];
    // handle shoot.
    onShoot(id: number): void;
}