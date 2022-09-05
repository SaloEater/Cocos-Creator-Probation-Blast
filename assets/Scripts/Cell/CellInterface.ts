export interface CellInterface {
    hasSameType(anotherCell: CellInterface): boolean
    setColumn(newColumn: number): void
    setRow(newRow: number): void
    getColumn(): number
    getRow(): number
}