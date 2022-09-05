import { CellWithPosition } from "./CellWithPosition";
import { CellInterface } from "./CellInterface";

export class CellEmpty extends CellWithPosition {
    constructor(column: number, row: number) {
        super(column, row)
    }
}