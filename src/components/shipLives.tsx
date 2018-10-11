import * as React from 'react';
import '../styles/shipLives.css';

export class ShipLives extends React.Component<ShipLivesProps, {}> {
  public renderRemainingLives() {
    const count = this.getRemainingLivesCount();
    const lives = [];
    for (let i = 0; i < count; i++) {
      lives.push(<div key={i} className={'ship-live undamaged'} />);
    }
    return lives;
  }

  public renderHittedLives() {
    const count = this.getHitLivesCount();
    const lives = [];
    for (let i = 0; i < count; i++) {
      lives.push(<div key={i} className={'ship-live damaged'} />);
    }
    return lives;
  }

  public render() {
    return (
      <div className="ship-state-icons">
        {
          this.renderHittedLives()
        }
        {
          this.renderRemainingLives()
        }
      </div>
    );
  }

  // Calculates count of remaining lives or 0 if value is incorrect.
  private getRemainingLivesCount(): number {
    if (this.props.hitCount > this.props.livesCount) {
      return 0;
    } else {
      return this.props.livesCount - this.props.hitCount;
    }
  }

  // Gets hit count or 0 if values is incorrect.
  private getHitLivesCount(): number {
    return this.props.livesCount >= this.props.hitCount ? this.props.hitCount : 0;
  }
}

interface ShipLivesProps {
  // Count of lives.
  livesCount: number;
  // Count of hits.
  hitCount: number;
}
