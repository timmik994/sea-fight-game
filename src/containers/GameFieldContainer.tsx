import { GameFieldComponent } from '../components/GameFieldComponent';
import {  IGameState } from '../reducers/reducers';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { shootCell } from '../actions/actions';

const mapStateToProps = (state: IGameState) => ({
    Cells: state.CellStates
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onShoot: (id: number) => dispatch(shootCell(id))
});

export const GameFieldContainer = connect(mapStateToProps, mapDispatchToProps) (GameFieldComponent);