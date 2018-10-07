import { GameState } from '../reducers/gameReducer';
import { connect } from 'react-redux';
import { Fleet } from '../components/fleetStatus';

const mapStateToProps = (state: GameState) => ({
    ships: state.fleet
});

export const FleetStatus = connect(mapStateToProps, {})(Fleet);