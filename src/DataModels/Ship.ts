// Single ship.
export class Ship {
    // Ship name.
    public name: string;

    // Lives count.
    public livesCount: number;

    // Hits count.
    public hitCount: number;

    constructor(name: string, livesCount: number, hitCount: number) {
        this.name = name;
        this.livesCount = livesCount;
        this.hitCount = hitCount;
    }
}