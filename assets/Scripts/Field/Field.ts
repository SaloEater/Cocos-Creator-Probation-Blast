import { CellInterface } from "../Cell/CellInterface";
import { CellSimple } from "../Cell/CellSimple";
import { FieldColumn } from "../FieldColumn/FieldColumn";

export class Field {
    field: Map<number, FieldColumn>
    rows: number
    columns: number

    constructor(rows: number, columns: number) {
        this.rows = rows
        this.columns = columns
        this.field = new Map<number, FieldColumn>
        this.createField()
    }

    createField() {
        for (let columnIndex = 0; columnIndex < this.columns; columnIndex++) {
            this.field.set(columnIndex, new FieldColumn(columnIndex, this.rows))
        }
    }

    setCell(column: number, row: number, cell: CellInterface) {
        this.field.get(column).setCell(row, cell)
    }
    
    getCellAt(column: number, row: number): CellInterface {
        return this.field.get(column).getCellAt(row)
    }
}