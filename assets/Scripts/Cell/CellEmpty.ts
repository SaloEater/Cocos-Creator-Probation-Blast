import { CellWithPosition } from "./CellWithPosition";

export class CellEmpty extends CellWithPosition {
    constructor(column: number, row: number) {
        super(column, row)
    }
}