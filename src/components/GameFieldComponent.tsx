import * as React from 'react';
import { CellComponent } from './CellComponent';
import { CellState } from '../DataModels/CellState';

// Game field.
export class GameFieldComponent extends React.Component<IGameFieldProps, {}> {
    constructor(props: IGameFieldProps) {
        super(props);
    }

    public render() {
        return (
            <div id="game-field" className="game-field">
                {
                    this.props.Cells.map((cellState, i) => <CellComponent onShoot={this.props.onShoot} Id={i} State={cellState} key={i} />)
                }
            </div>
        );
    }

}

export interface IGameFieldProps {
    // Array of cell states.
    Cells: CellState[];

    // handle shoot.
    onShoot(id: number): void;
}