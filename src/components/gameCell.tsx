import * as React from 'react';
import { CellState } from '../enums/cellState';
import '../styles/seaCell.css';

// Cell in game field.
export class GameCell extends React.Component<GameCellProps, GameCellState> {
    constructor(props: GameCellProps) {
        super(props);

        this.shootCell = this.shootCell.bind(this);
    }

    public render() {
        return <div onClick={() => this.shootCell()} className={`cell ${this.getCellClass()}`} />;
    }

    private shootCell() {
        if (this.props.state === CellState.Unshooted) {
            this.props.onShoot(this.props.id);
        }
    }

    // Gets cell class name from CellState.
    private getCellClass(): string {
        switch (this.props.state) {
            case CellState.Missed: return 'miss-cell';
            case CellState.Hitted: return 'hit-cell';
            case CellState.Unshooted: return 'base-cell';
            default: return '';
        }
    }
}

interface GameCellState {
    // Does cell needed to be highlighted.
    isHighlighted: boolean;
}

interface GameCellProps {
    // State of the cell
    state: CellState;
    // Id of the cell
    id: number;
    // Shoot to cell
    onShoot(id: number): void;
}
