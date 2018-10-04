import * as React from 'react';
import { CellState } from '../DataModels/CellState';

// Cell in game field.
export class CellComponent extends React.Component<ICellComponentProps, ICellComponentState> {
    constructor(props: ICellComponentProps) {
        super(props);
        let clicked = true;
        if (this.props.State === CellState.Unshotted) {
            clicked = false;
        }
        
        this.state = {
            IsClicked: clicked,
            IsHighlighted: false,
        };

        this.MouseOut = this.MouseOut.bind(this);
        this.MouseOver = this.MouseOver.bind(this);
    }

    public render() {
        return <div onMouseOver={this.MouseOver} onMouseOut={this.MouseOut} 
        onClick={() => this.props.onShoot(this.props.Id)}
        className={`${this.GetBaseCellClass()} ${this.GetCellClass()}`} />;
    }

    // Gets class for basic or highlighted cell.
    private GetBaseCellClass(): string {
        if (this.state.IsHighlighted) {
            return 'highlighted-cell';
        } else {
            return 'cell';
        }
    }

    private MouseOver() {
        if (!this.state.IsClicked) {
            this.setState({
                IsClicked: this.state.IsClicked,
                IsHighlighted: true
            });
        }
    }

    private MouseOut() {
        if (!this.state.IsClicked) {
            this.setState({
                IsClicked: this.state.IsClicked,
                IsHighlighted: false
            });
        }
    }

    // Gets cell class name from CellState.
    private GetCellClass() {
        switch (this.props.State) {
            case CellState.Unshotted: return '';
            case CellState.Missed: return 'miss-cell';
            case CellState.Hitted: return 'hit-cell';
            default: return '';
        }
    }
}

interface ICellComponentState {
    // Is cell clicked.
    IsClicked: boolean;

    // Does cell needed to be highlighted.
    IsHighlighted: boolean;
}

interface ICellComponentProps {
    // State of the cell
    State: CellState;

    // Id of the cell
    Id: number;

    // Shoot to cell
    onShoot(id: number): void;
}
