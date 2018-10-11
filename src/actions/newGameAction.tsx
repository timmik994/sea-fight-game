import { ShipDirection } from '../enums/shipDirection';
import { GameFieldHelper } from '../helpers/gameFieldHelper';
import { Action } from 'redux';
import { createShip, Ship } from '../reducers/gameReducer';

export const newGameAction = 'NEW_GAME';

export interface NewGameAction extends Action {
  ships: Ship[];
  shipPositions: number[];
}

export function createNewGameAction(): NewGameAction {
  const shipPositions: number[] = Array(100).fill(-1);
  const emptyCells: boolean[] = Array(100).fill(true);
  const ships: Ship[] = [
    createShip('aircraft', 5, 0),
    createShip('battleship', 4, 0),
    createShip('cruiser', 3, 0),
    createShip('submarine', 3, 0),
    createShip('carrier', 2, 0)
  ];
  for (let i = 0; i < ships.length; i++) {
    let shipSet = false;
    while (!shipSet) {
      let startPos = Math.round(Math.random() * 99);
      const directions = possibleShipDirections(ships[i], startPos, emptyCells);
      if (directions.length === 0) {
        continue;
      }

      let directionIndex = Math.round(Math.random() * directions.length);
      if (directionIndex >= directions.length) {
        directionIndex--;
      }

      switch (directions[directionIndex]) {
        case ShipDirection.Down:
          setShipDown(i, startPos, ships[i].livesCount, shipPositions, emptyCells);
          shipSet = true;
          break;
        case ShipDirection.Right:
          setShipRight(i, startPos, ships[i].livesCount, shipPositions, emptyCells);
          shipSet = true;
          break;
        default: continue;
      }
    }
  }

  return {
    shipPositions: shipPositions,
    ships: ships,
    type: newGameAction
  };
}

function possibleShipDirections(ship: Ship, startPos: number, emptyCells: boolean[]): ShipDirection[] {
  let possible: ShipDirection[] = [];
  if (canSetShipDown(startPos, ship.livesCount, emptyCells)) {
    possible.push(ShipDirection.Down);
  }

  if (canSetShipRight(startPos, ship.livesCount, emptyCells)) {
    possible.push(ShipDirection.Right);
  }

  return possible;
}

function canSetShipDown(startPos: number, shipLength: number, emptyCells: boolean[]): boolean {
  const endPos = startPos + 10 * shipLength;
  let canSet: boolean = true;
  if (endPos < 100) {
    for (let i = startPos; i < endPos; i += 10) {
      if (!emptyCells[i]) {
        canSet = false;
        break;
      }
    }
  } else {
    canSet = false;
  }

  return canSet;
}

function canSetShipRight(startPos: number, shipLength: number, emptyCells: boolean[]): boolean {
  let canSet: boolean = true;
  let currCell = startPos;
  for (let i = 0;
    i < shipLength && GameFieldHelper.hasCellRight(currCell);
    i++ , currCell = GameFieldHelper.rightCell(currCell)) {

    if (!emptyCells[currCell]) {
      canSet = false;
      break;
    }
  }

  if (currCell < startPos + shipLength) {
    canSet = false;
  }

  return canSet;
}

function setShipDown(shipIndex: number, startPos: number, shipLength: number, shipPositions: number[], emptyCells: boolean[]) {
  const endPos = startPos + 10 * (shipLength - 1);
  for (let i = startPos; i <= endPos; i += 10) {
    shipPositions[i] = shipIndex;
    emptyCells[i] = false;
    if (GameFieldHelper.hasCellLeft(i)) {
      emptyCells[GameFieldHelper.leftCell(i)] = false;
    }

    if (GameFieldHelper.hasCellRight(i)) {
      emptyCells[GameFieldHelper.rightCell(i)] = false;
    }
  }

  if (GameFieldHelper.hasCellUp(startPos)) {
    let cell = GameFieldHelper.upCell(startPos);
    emptyCells[cell] = false;
    if (GameFieldHelper.hasCellLeft(cell)) {
      emptyCells[GameFieldHelper.leftCell(cell)] = false;
    }

    if (GameFieldHelper.hasCellRight(cell)) {
      emptyCells[GameFieldHelper.rightCell(cell)] = false;
    }
  }

  if (GameFieldHelper.hasCellDown(endPos)) {
    let cell = GameFieldHelper.downCell(endPos);
    emptyCells[cell] = false;
    if (GameFieldHelper.hasCellLeft(cell)) {
      emptyCells[GameFieldHelper.leftCell(cell)] = false;
    }

    if (GameFieldHelper.hasCellRight(cell)) {
      emptyCells[GameFieldHelper.rightCell(cell)] = false;
    }
  }
}

function setShipRight(shipIndex: number, startPos: number, shipLength: number, shipPositions: number[], emptyCells: boolean[]) {
  const endPos = startPos + shipLength - 1;
  for (let i = startPos; i <= endPos; i++) {
    shipPositions[i] = shipIndex;
    emptyCells[i] = false;
    if (GameFieldHelper.hasCellUp(i)) {
      emptyCells[GameFieldHelper.upCell(i)] = false;
    }

    if (GameFieldHelper.hasCellDown(i)) {
      emptyCells[GameFieldHelper.downCell(i)] = false;
    }
  }

  if (GameFieldHelper.hasCellLeft(startPos)) {
    let cell = GameFieldHelper.leftCell(startPos);
    emptyCells[cell] = false;
    if (GameFieldHelper.hasCellUp(cell)) {
      emptyCells[GameFieldHelper.upCell(cell)] = false;
    }

    if (GameFieldHelper.hasCellDown(cell)) {
      emptyCells[GameFieldHelper.downCell(cell)] = false;
    }
  }

  if (GameFieldHelper.hasCellRight(endPos)) {
    let cell = GameFieldHelper.rightCell(endPos);
    emptyCells[cell] = false;
    if (GameFieldHelper.hasCellUp(cell)) {
      emptyCells[GameFieldHelper.upCell(cell)] = false;
    }

    if (GameFieldHelper.hasCellDown(cell)) {
      emptyCells[GameFieldHelper.downCell(cell)] = false;
    }
  }
}
