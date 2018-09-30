import * as React from 'react';

export class ShipLivesComponent extends React.Component<IShipLivesProps, IShipLivesState>
{
    constructor(props: IShipLivesProps){
        super(props);
        const lives:string[] = [];
        for (let i = 0; i < this.GetHitLivesCount(); i++) {
            lives.push("damaged")
        }

        for (let i = 0; i < this.GetRemainingLivesCount(); i++) {
            lives.push("undamaged")
        }

        this.state ={
            LiveStates: lives
        }
    }

    public render() {
       
        return (
            <div className="ship-state-icons">
            {
                this.state.LiveStates.map((state,i) => <div key = {i} className = {"ship-live "+state} />)
            }
            </div>
           
        )
    }

    // Calculates count of remaining lives or 0 if value is incorrect.
    private GetRemainingLivesCount(): number {
        if (this.props.HitCount > this.props.LivesCount) {
            return 0;
        } else {
            return this.props.LivesCount - this.props.HitCount;
        }
    }

    // Gets hit count or 0 if values is incorrect.
    private GetHitLivesCount(): number {
        return (this.props.LivesCount >= this.props.HitCount ? this.props.HitCount : 0);
    }
}

interface IShipLivesState{
    // Class name for the icon
    LiveStates: string[];
}

interface IShipLivesProps {
    // Count of lives.
    LivesCount: number;

    // Count of hits.
    HitCount: number
}