import { CellInterface } from "./CellInterface";

export class CellEmpty implements CellInterface {
    column: number
    row: number

    constructor(column: number, row: number) {
        this.column = column
        this.row = row
    }

    getColumn(): number {
        return this.column
    }

    getRow(): number {
        return this.row
    }
}