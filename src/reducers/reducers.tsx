import { Ship } from '../DataModels/Ship';
import { CellState } from '../DataModels/CellState';
import { shootAction, IShootAction } from '../actions/actions';
import { Action, Reducer } from 'redux';

export const gameReducer: Reducer<IGameState> = (state: IGameState, action: Action) => {
    if (state === undefined) {
        state = InitGameState();
    }

    if (action.type === shootAction) {
        const cellStates = state.CellStates.slice();
        const shootedIndex =  (action as IShootAction).CellIndex;
        cellStates[shootedIndex] = CellState.Missed;
        state = {
            CellStates: cellStates,
            Fleet: state.Fleet,
            ShipsPositions: state.ShipsPositions
        };
    }

    return state;
};

function InitGameState(): IGameState {
    const cellsStates = [];
    for (let i = 0; i < 100; i++) {
        cellsStates.push(CellState.Unshotted);
    }
    const gameState: IGameState = {
        CellStates: cellsStates,
        Fleet: [],
        ShipsPositions: []
    };

    return gameState;
}

export interface IGameState {
    ShipsPositions: boolean[];
    CellStates: CellState[];
    Fleet: Ship[];
}

export interface IState {
    gameState: IGameState;
}
