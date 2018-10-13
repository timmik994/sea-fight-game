import { Action } from 'redux';
import { CellState } from '../enums/cellState';

export const shootAction = 'SHOOT_CELL';

export const shootCell = (id: number, cellState: CellState): ShootAction => (
  {
    type: shootAction,
    cellIndex: id,
    cellState: cellState
  });

export interface ShootAction extends Action {
  cellIndex: number;
  cellState: CellState;
}
