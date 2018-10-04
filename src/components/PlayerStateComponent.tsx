import * as React from 'react';

// Static player state view.
export class PlayerStateComponent extends React.Component {
    public render() {
        return (
            <div id="players" className="players">
                <div className="player-state yellow-player-state">
                    <div className="player-points">00</div>
                    <div className="player-name">player 1</div>
                </div>
                <div className="player-state green-player-state">
                    <div className="player-points">00</div>
                    <div className="player-name">player 2</div>
                </div>
            </div>
        );
    }
}