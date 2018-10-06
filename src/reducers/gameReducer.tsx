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
        const shootedIndex = (action as ShootAction).cellIndex;
        const cellNum = state.shipsPositions[shootedIndex];
        const shipStates = state.fleet.map(ship => ({ ...ship }));

        if (cellNum < 0) {
            cellStates[shootedIndex] = CellState.Missed;
        } else {
            cellStates[shootedIndex] = CellState.Hitted;
            shipStates[cellNum] = new Ship(state.fleet[cellNum].name, state.fleet[cellNum].livesCount, state.fleet[cellNum].hitCount + 1);
            if (shipStates[cellNum].hitCount === shipStates[cellNum].livesCount) {
                markKilledShip(cellNum, cellStates, state.shipsPositions);
            }
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
        cellsStates.push(CellState.Unshooted);
    }

    const ships: Ship[] = [
        new Ship('aircraft', 5, 0),
        new Ship('battleship', 4, 0),
        new Ship('cruiser', 3, 0),
        new Ship('submarine', 3, 0),
        new Ship('carrier', 2, 0)
    ];

    const shipPositions: number[] = Array(100).fill(-1);

    for (let i = 0; i < ships.length; i++) {
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

// Set CellState.Missed around killed ship.
function markKilledShip(shipIndex: number, cellStates: CellState[], shipPositions: number[]) {
    for (let i = 0; i < cellStates.length; i++) {
        if (shipPositions[i] === shipIndex) {
            // check is cells around current cell are exists.
            const hasLeftCell = i % 10 > 0;
            const hasRightCell = i % 10 < 9;
            const hasDownCell = i + 10 < 100;
            const hasUpCell = i - 10 > 0;

            if (hasLeftCell) {
                markUnshootedAsMissed(i - 1, cellStates);
            }
            if (hasRightCell) {
                markUnshootedAsMissed(i + 1, cellStates);
            }
            if (hasDownCell) {
                markUnshootedAsMissed(i + 10, cellStates);
            }
            if (hasUpCell) {
                markUnshootedAsMissed(i - 10, cellStates);
            }
            if (hasLeftCell && hasUpCell) {
                markUnshootedAsMissed(i - 10 - 1, cellStates);
            }
            if (hasLeftCell && hasDownCell) {
                markUnshootedAsMissed(i + 10 - 1, cellStates);
            }
            if (hasRightCell && hasUpCell) {
                markUnshootedAsMissed(i - 10 + 1, cellStates);
            }
            if (hasRightCell && hasDownCell) {
                markUnshootedAsMissed(i + 10 + 1, cellStates);
            }
        }
    }
}

// Marks cell as Missed if cell state is unshooted.
function markUnshootedAsMissed(index: number, cellStates: CellState[]) {
    if (cellStates[index] === CellState.Unshooted) {
        cellStates[index] = CellState.Missed;
    }
}

export interface GameState {
    shipsPositions: number[];
    cellStates: CellState[];
    fleet: Ship[];
}

export interface State {
    gameState: GameState;
}
