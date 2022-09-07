import { CellInterface } from "../Cell/CellInterface";
import { Field } from "../Field/Field";

export interface CellsInRadiusInterface {
    findCellsInRadius(
        field: Field,
        column: number,
        row: number,
        radius: number,
    ): CellInterface[]
}