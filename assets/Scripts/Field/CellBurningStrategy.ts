import { CellEmpty } from "../Cell/CellEmpty";
import { CellBurningStrategyInterface } from "./CellBurningStrategyInterface";
import { Field } from "./Field";

export class CellBurningStrategy implements CellBurningStrategyInterface {
    burnCellAt(field: Field, column: number, row: number, mininumAmount: number) {
        let cell = field.getCellAt(column, row)
        let similarCells = field.getAllNeighbourSimilarCells(column, row, cell)
        
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