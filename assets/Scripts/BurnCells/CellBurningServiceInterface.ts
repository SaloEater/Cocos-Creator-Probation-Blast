import { Field } from "../Field/Field";

export interface CellBurningServiceInterface {
    burnCellAt(field: Field, column: number, row: number, mininumAmount: number)
}