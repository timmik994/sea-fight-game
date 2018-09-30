// Single ship.
export class Ship {
    // Ship name.
    public Name: string;

    // Lives count.
    public LivesCount: number;

    // Hits count.
    public HitCount: number;

    constructor(name: string, livesCount: number, hitCount: number) {
        this.Name = name;
        this.LivesCount = livesCount;
        this.HitCount = hitCount;
    }
}