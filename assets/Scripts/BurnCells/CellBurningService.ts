import { CellEmpty } from "../Cell/CellEmpty";
import { CellBurningServiceInterface } from "./CellBurningServiceInterface";
import { Field } from "../Field/Field";
import { SimilarCellsServiceInterface } from "../SimilarCells/SimilarCellsServiceInterface";
import { container } from "../container";
import { TYPES } from "../types";

export class CellBurningService implements CellBurningServiceInterface {
    private similarCellsService: SimilarCellsServiceInterface

    constructor() {
        this.similarCellsService = container.get(TYPES.similarCellsService)
    }

    burnCellAt(field: Field, column: number, row: number, mininumAmount: number) {
        let cell = field.getCellAt(column, row)
        let similarCells = this.similarCellsService.findSimilarCells(
            field,
            column,
            row,
            cell
        )
        
        if (similarCells.length >= mininumAmount) {
            field.setCell(column, row, new CellEmpty(column, row))
            similarCells.forEach(i =>
                field.setCell(
                    i.getColumn(),
                    i.getRow(),
                    new CellEmpty(i.getColumn(), i.getRow())
                )
            )
        }

    }
}