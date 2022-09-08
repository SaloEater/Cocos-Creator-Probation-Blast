import { CellInterface } from "../Cell/CellInterface";
import { Field } from "../Field/Field";
import { SimilarCellsService } from "../SimilarCells/SimilarCellsService";

export class SameColumnCellsService extends SimilarCellsService {
    column: number

    findCellsOnSameColumn(field: Field, column: number, row: number): CellInterface[] {
        this.column = row
        
        return this.findSimilarCells(
            field,
            column,
            row,
            field.getCellAt(column, row)
        )
    }

    protected isValid(cell: CellInterface, field: Field, column: number, row: number): boolean {
        return column === this.column
    }
}