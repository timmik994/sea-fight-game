import * as React from 'react';
import { CellState } from './DataModels/CellState';

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
            State: this.props.State
        };

        this.MouseOut = this.MouseOut.bind(this);
        this.MouseOver = this.MouseOver.bind(this);
        this.Shoot = this.Shoot.bind(this);
    }

    public render() {

        return <div onMouseOver={this.MouseOver} onMouseOut={this.MouseOut} onClick={this.Shoot}
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

    // This method called when cell is clicked.
    private Shoot() {
        if (!this.state.IsClicked) {
            this.setState({
                IsClicked: true,
                IsHighlighted: false,
                State: CellState.Missed
            });
        }
    }

    // Gets cell class name from CellState.
    private GetCellClass() {

        switch (this.state.State) {
            case CellState.Unshotted: return '';
            case CellState.Missed: return 'miss-cell';
            case CellState.Hitted: return 'hit-cell';
        }

    }

}

interface ICellComponentState {

    // Is cell clicked.
    IsClicked: boolean;

    // Does cell needed to be highlighted.
    IsHighlighted: boolean;

    // State of the cell.
    State: CellState;

}

interface ICellComponentProps {

    // State of the cell
    State: CellState;

    // Id of the cell
    Id: number;

}
