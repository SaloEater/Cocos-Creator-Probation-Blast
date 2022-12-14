import { CellInterface } from "./CellInterface";

export class CellWithPosition implements CellInterface {
    column: number
    row: number

    constructor(column: number, row: number) {
        this.column = column
        this.row = row
    }

    setColumn(newColumn: number): void {
        this.column = newColumn
    }

    setRow(row: number): void {
        this.row = row
    }

    getColumn(): number {
        return this.column
    }

    getRow(): number {
        return this.row
    }

    hasSameType(anotherCell: CellInterface): boolean {
        const newLocal = Object.getPrototypeOf(this);
        const newLocal_1 = Object.getPrototypeOf(anotherCell);
        
        return newLocal === newLocal_1
    }
}