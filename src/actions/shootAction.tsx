import { Action } from 'redux';

export const shootAction = 'SHOOT_CELL';

export const shootCell = (id: number): ShootAction => ({ type: shootAction, cellIndex: id });

export interface ShootAction extends Action {
    cellIndex: number;
}