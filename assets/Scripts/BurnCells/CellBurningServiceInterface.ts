import { Field } from "./Field";

export interface CellBurningServiceInterface {
    burnCellAt(field: Field, x: number, y: number, mininumAmount: number)
}