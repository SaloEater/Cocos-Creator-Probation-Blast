import { CellEmpty } from "../Cell/CellEmpty";
import { CellInterface } from "../Cell/CellInterface";
import { Field } from "../Field/Field";
import { FieldColumn } from "../FieldColumn/FieldColumn";
import { SquashFieldInterface } from "./SquashFieldServiceInterface";

export class SquashFieldService implements SquashFieldInterface {
    squash(field: Field) {
        field.field.forEach(i => this.squashColumn(i))
    }

    squashColumn(column: FieldColumn): void {
        let groups: CellInterface[][] = []

        let lastAddedHeight: number|null = null
        let group: CellInterface[] = []
        for (let row = column.height - 1; row >= 0; row--) {
            let cell = column.getCellAt(row)

            if (cell instanceof CellEmpty) {
                continue
            }

            if (lastAddedHeight && lastAddedHeight - row > 1) {
                groups.push(group)
                group = []
            }

            group.push(cell)
            lastAddedHeight = row
        }

        if (group.length > 0) {
            groups.push(group)
        }

        groups.forEach(i => {
            let lowestCell = i[0]
            let row = lowestCell.getRow()
            let rowIncreasement = 0
            
            while (
                column.isCellExist(row + rowIncreasement + 1)
                && column.isCellEmpty(row + rowIncreasement + 1)
            ) {
                rowIncreasement++
            }

            if (rowIncreasement === 0) {
                return
            }
            
            i.forEach(j => {
                column.setCell(j.getRow(), new CellEmpty(j.getColumn(), j.getRow()))
                let newRow = j.getRow() + rowIncreasement
                column.setCell(newRow, j)
                j.setRow(newRow)
            })
        })
    }
}