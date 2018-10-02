import * as React from 'react';
import { CellState } from './DataModels/CellState';

// Cell in game field.
export class CellComponent extends React.Component<ICellComponentProps, {}> {

    public render() {

        return <div className={'cell ' + this.GetCellClass()} />;

    }

    // Gets cell class name from CellState.
    private GetCellClass() {

        switch (this.props.State) {
            case CellState.Unshotted: return '';
            case CellState.Missed: return 'miss-cell';
            case CellState.Hitted: return 'hit-cell';
        }

    }

}

interface ICellComponentProps {

    State: CellState;

}
