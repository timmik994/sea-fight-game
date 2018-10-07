import { GameField } from '../components/gameField';
import { GameState } from '../reducers/gameReducer';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { shootCell } from '../actions/shootAction';

const mapStateToProps = (state: GameState) => ({
    cells: state.cellStates
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onShoot: (id: number) => dispatch(shootCell(id))
});

export const GameFieldStatus = connect(mapStateToProps, mapDispatchToProps)(GameField);