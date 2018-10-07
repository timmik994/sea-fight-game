export class GameFieldHelper {
    public static hasCellDown(index: number): boolean {
        return index + 10 < 100;
    }

    public static hasCellUp(index: number): boolean {
        return index - 10 > 0;
    }

    public static hasCellRight(index: number): boolean {
        return index % 10 < 9;
    }

    public static hasCellLeft(index: number): boolean {
        return index % 10 > 0;
    }

    public static upCell(index: number): number {
        return index - 10;
    }

    public static downCell(index: number): number {
        return index + 10;
    }

    public static rightCell(index: number): number {
        return index + 1;
    }

    public static leftCell(index: number): number {
        return index - 1;
    }

    public static leftUpCell(index: number): number {
        return index - 10 - 1;
    }

    public static leftDownCell(index: number): number {
        return index + 10 - 1;
    }

    public static rightUpCell(index: number): number {
        return index - 10 + 1;
    }

    public static rightDownCell(index: number): number {
        return index + 10 + 1;
    }
}
