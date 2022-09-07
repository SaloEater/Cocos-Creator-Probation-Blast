import { CellInterface } from "../Cell/CellInterface";
import { Field } from "../Field/Field";
import { SimilarCellsService } from "../SimilarCells/SimilarCellsService";

export class SameRowCellsService extends SimilarCellsService {
    row: number

    findCellsOnSameRow(field: Field, column: number, row: number): CellInterface[] {
        this.row = row
        
        return this.findSimilarCells(
            field,
            column,
            row,
            field.getCellAt(column, row)
        )
    }

    protected isValid(cell: CellInterface, field: Field, column: number, row: number): boolean {
        return row === this.row
    }
}