import { CellInterface } from "../Cell/CellInterface";
import { Field } from "../Field/Field";

export interface CellBurningServiceInterface {
    burnCellsAt(field: Field, column: number, row: number, mininumAmount: number)
    burnCell(field: Field, destroyedCell: CellInterface, originCell: CellInterface): void
}