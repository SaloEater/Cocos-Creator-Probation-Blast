import { CellInterface } from "../Cell/CellInterface";
import { Field } from "../Field/Field";

export interface SimilarCellsServiceInterface {
    findSimilarCells(
        field: Field,
        column: number,
        row: number,
        cell: CellInterface
    ): CellInterface[]
}