import { Field } from "./Field";

export interface CellBurningStrategyInterface {
    burnCellAt(field: Field, x: number, y: number, mininumAmount: number)
}