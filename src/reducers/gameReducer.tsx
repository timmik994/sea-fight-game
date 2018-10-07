import { Ship } from '../DataModels/ship';
import { CellState } from '../enums/cellState';
import { shootAction, ShootAction } from '../actions/shootAction';
import { Action, Reducer } from 'redux';
import { GameFieldHelper } from '../helpers/gameFieldHelper';
import { newGameAction, NewGameAction } from '../actions/newGameAction';

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
        const isWon = shipStates.every(ship => ship.livesCount === ship.hitCount);
        state = {
            cellStates: cellStates,
            fleet: shipStates,
            shipsPositions: state.shipsPositions,
            win: isWon
        };
    }

    if (action.type === newGameAction) {
        const newGame = action as NewGameAction;
        state = {
            cellStates: Array(100).fill(CellState.Unshooted),
            fleet: newGame.ships,
            shipsPositions: newGame.shipPositions,
            win: false
        };
    }

    return state;
};

function initGameState(): GameState {
    const cellsStates = [];
    for (let i = 0; i < 100; i++) {
        cellsStates.push(CellState.Unshooted);
    }

    const ships: Ship[] = [];

    const shipPositions: number[] = Array(100).fill(-1);

    const gameState: GameState = {
        cellStates: cellsStates,
        fleet: ships,
        shipsPositions: shipPositions,
        win: false
    };

    return gameState;
}

// Set CellState.Missed around killed ship.
function markKilledShip(shipIndex: number, cellStates: CellState[], shipPositions: number[]) {
    for (let i = 0; i < cellStates.length; i++) {
        if (shipPositions[i] === shipIndex) {
            // check is cells around current cell are exists.
            const hasLeftCell = GameFieldHelper.hasCellLeft(i);
            const hasRightCell = GameFieldHelper.hasCellRight(i);
            const hasDownCell = GameFieldHelper.hasCellDown(i);
            const hasUpCell = GameFieldHelper.hasCellUp(i);

            if (hasLeftCell) {
                markUnshootedAsMissed(GameFieldHelper.leftCell(i), cellStates);
            }
            if (hasRightCell) {
                markUnshootedAsMissed(GameFieldHelper.rightCell(i), cellStates);
            }
            if (hasDownCell) {
                markUnshootedAsMissed(GameFieldHelper.downCell(i), cellStates);
            }
            if (hasUpCell) {
                markUnshootedAsMissed(GameFieldHelper.upCell(i), cellStates);
            }
            if (hasLeftCell && hasUpCell) {
                markUnshootedAsMissed(GameFieldHelper.leftUpCell(i), cellStates);
            }
            if (hasLeftCell && hasDownCell) {
                markUnshootedAsMissed(GameFieldHelper.leftDownCell(i), cellStates);
            }
            if (hasRightCell && hasUpCell) {
                markUnshootedAsMissed(GameFieldHelper.rightUpCell(i), cellStates);
            }
            if (hasRightCell && hasDownCell) {
                markUnshootedAsMissed(GameFieldHelper.rightDownCell(i), cellStates);
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
    win: boolean;
}

export interface State {
    gameState: GameState;
}
