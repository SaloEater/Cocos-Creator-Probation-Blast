import { CellEmpty } from "../Cell/CellEmpty";
import { CellInterface } from "../Cell/CellInterface";
import { CellSimple } from "../Cell/CellSimple";

export class FieldColumn {
    cells: Map<number, CellInterface>
    height: number
    columnIndex: number

    constructor(columnIndex: number, height: number) {
        this.cells = new Map<number, CellInterface>()
        this.height = height
        this.columnIndex = columnIndex
        this.createCells()
    }

    createCells() {
        for (let y = 0; y < this.height; y++) {
            this.cells.set(y, new CellEmpty(this.columnIndex, y))
        }
    }

    setCell(row: number, cell: CellInterface) {
        this.cells.set(row, cell)
    }
    
    getCellAt(row: number): CellInterface {
        return this.cells.get(row)
    }

    isCellExist(row: number): boolean {
        return row >= 0 && row < this.height
    }
}