import * as React from 'react';
import {CellComponent, CellState} from './CellComponent';

// Game field.
export class GameFieldComponent extends React.Component<{}, IGameFieldState> {

    constructor(props:{}){
        super(props);
        const fieldState: CellState[] = [];
        for(let i=0;i<100;i++ ){
            fieldState.push(CellState.Unshotted);
        }
        fieldState[2] = CellState.Missed;
        fieldState[7] = CellState.Missed;
        fieldState[37] = CellState.Hitted;
        fieldState[38] = CellState.Hitted;
        fieldState[91] = CellState.Missed;
        this.state = {
            Cells: fieldState
        }
    }

    public render() {
        return (
            <div id="game-field" className="game-field">
                {
                    this.state.Cells.map((cellState,i) => <CellComponent State = {cellState} key = {i} />)
                }
            </div>
        )
    }
}

interface IGameFieldState{
    // Array of cell states.
    Cells:CellState[];
}