import { Action } from 'redux';

export const shootAction = 'SHOOT_CELL';

export const shootCell = (id: number): IShootAction => ({ type: shootAction, CellIndex: id });

export interface IShootAction extends Action {
    CellIndex: number;
}