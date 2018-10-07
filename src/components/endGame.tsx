import * as React from 'react';
import '../styles/endGame.css';

// End game component.
export class EndGame extends React.Component <EndGameProps, {}> {
    public renderIfGameEnded() {
        if (this.props.gameEnded) {
            return (
            <div className="game-ended" >
                <label className="win-text" >You won!!!</label>
                <button className="new-game-button" onClick={() => this.props.onNewGame()}>Play again.</button>
            </div>);
        } else {
            return '';
        }
    }

    public render() {
        return this.renderIfGameEnded();
    }
}

interface EndGameProps {
    // Indicates end of the game.
    gameEnded: boolean;
    // Invokes action that creates new game.
    onNewGame(): void;
}