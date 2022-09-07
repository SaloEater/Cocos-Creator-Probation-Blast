import { CellInterface } from "./CellInterface";
import { CellVisual } from "./Component/CellVisual";

export interface CellActionCommandInterface {
    execute(column: number, row: number): void
}