import { GameField } from '../components/gameField';
import { GameState } from '../reducers/gameReducer';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { shootCell } from '../actions/shootAction';
import { CellState } from '../enums/cellState';

const mapStateToProps = (state: GameState) => ({
  cells: state.cellStates
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onShoot: (id: number, cellState: CellState) => dispatch(shootCell(id, cellState))
});

export const GameFieldStatus = connect(mapStateToProps, mapDispatchToProps)(GameField);
