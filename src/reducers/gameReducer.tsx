import { Ship } from '../DataModels/ship';
import { CellState } from '../enums/cellState';
import { shootAction, ShootAction } from '../actions/shootAction';
import { Action, Reducer } from 'redux';

export const gameReducer: Reducer<GameState> = (state: GameState, action: Action) => {
    if (state == undefined) {
        state = initGameState();
    }

    if (action.type === shootAction) {
        const cellStates = state.cellStates.slice();
        const shootedIndex =  (action as ShootAction).cellIndex;
        const cellNum = state.shipsPositions[shootedIndex];
        const shipStates = state.fleet.map(ship => ({...ship}));
        
        if (cellNum < 0) {
            cellStates[shootedIndex] = CellState.Missed;
        } else {
            cellStates[shootedIndex] = CellState.Hitted;
            shipStates[cellNum] = new Ship( state.fleet[cellNum].name,  state.fleet[cellNum].livesCount, state.fleet[cellNum].hitCount + 1);
        }

        state = {
            cellStates: cellStates,
            fleet: shipStates,
            shipsPositions: state.shipsPositions
        };
    }

    return state;
};

function initGameState(): GameState {
    const cellsStates = [];
    for (let i = 0; i < 100; i++) {
        cellsStates.push(CellState.Unshotted);
    }

    const ships: Ship[] = [
        new Ship('aircraft', 5, 0),
        new Ship('battleship', 4, 0),
        new Ship('cruiser', 3, 0),
        new Ship('submarine', 3, 0),
        new Ship('carrier', 2, 0)
    ];

    const shipPositions: number[] = Array(100).fill(-1);

    for ( let i = 0; i < ships.length; i++) {
        let rowNumber = i + (i * 10 * 2); 
        for (let j = 0; j < ships[i].livesCount; j++) {
            shipPositions[rowNumber + j] = i;
        }
    }

    const gameState: GameState = {
        cellStates: cellsStates,
        fleet: ships,
        shipsPositions: shipPositions
    };

    return gameState;
}

export interface GameState {
    shipsPositions: number[];
    cellStates: CellState[];
    fleet: Ship[];
}

export interface State {
    gameState: GameState;
}
