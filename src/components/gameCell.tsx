import * as React from 'react';
import { CellState } from '../enums/cellState';
import '../styles/seaCell.css';

// Cell in game field.
export class GameCell extends React.Component<GameCellProps, GameCellState> {
    constructor(props: GameCellProps) {
        super(props);
        this.state = {
            isHighlighted: false,
        };
        this.onMouseOut = this.onMouseOut.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
        this.shootCell = this.shootCell.bind(this);
    }

    public render() {
        return <div onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} 
        onClick={() => this.shootCell()}
        className={`${this.getBaseCellClass()} ${this.getCellClass()}`} />;
    }

    // Gets class for basic or highlighted cell.
    private getBaseCellClass(): string {
        if (this.state.isHighlighted && this.props.state === CellState.Unshooted ) {
            return 'highlighted-cell';
        } else {
            return 'cell';
        }
    }

    private onMouseOver() {
        if (this.props.state === CellState.Unshooted) {
            this.setState({
                isHighlighted: true
            });
        }
    }

    private onMouseOut() {
        if (this.props.state === CellState.Unshooted) {
            this.setState({
                isHighlighted: false
            });
        }
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
