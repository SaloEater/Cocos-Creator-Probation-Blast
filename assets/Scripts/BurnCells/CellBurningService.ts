import { CellEmpty } from "../Cell/CellEmpty";
import { CellBurningServiceInterface } from "./CellBurningServiceInterface";
import { Field } from "../Field/Field";
import { SimilarCellsServiceInterface } from "../SimilarCells/SimilarCellsServiceInterface";
import { TYPES } from "../types";
import { CellInterface } from "../Cell/CellInterface";
import { injected } from "saloeater-brandi";

export class CellBurningService implements CellBurningServiceInterface {
    constructor(private similarCellsService: SimilarCellsServiceInterface) {
    }

    burnCellAt(field: Field, column: number, row: number, mininumAmount: number) {
        let cell = field.getCellAt(column, row)
        let similarCells = this.similarCellsService.findSimilarCells(
            field,
            column,
            row,
            cell
        )
        similarCells.push(cell)
        
        if (similarCells.length >= mininumAmount) {
            similarCells.forEach(i =>
                this.replaceCell(field, i)
            )
        }

    }

    protected replaceCell(field: Field, i: CellInterface): void {
        return field.setCell(
            i.getColumn(),
            i.getRow(),
            new CellEmpty(i.getColumn(), i.getRow())
        );
    }
}

injected(CellBurningService, TYPES.similarCellsService.optional)