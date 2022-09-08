import { Field } from "../Field/Field"

export class CellSuperLocationStorage {
    field: Field
    column: number
    row: number
    isCellSuper: boolean

    setField(field: Field) {
        this.field = field
    }
    
    setColumn(column: number) {
        this.column = column
    }

    setRow(row: number) {
        this.row = row
    }

    setCellSuper(isCellSuper: boolean) {
        this.isCellSuper = isCellSuper
    }
}