import { GameState } from '../reducers/gameReducer';
import { Dispatch } from 'redux';
import { createNewGameAction } from '../actions/newGameAction';
import { EndGame } from '../components/endGame';
import { connect } from 'react-redux';

const mapStateToProps = (state: GameState) => ({
    gameEnded: state.win
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onNewGame: () => dispatch(createNewGameAction())
});

export const GameEnded = connect(mapStateToProps, mapDispatchToProps)(EndGame);