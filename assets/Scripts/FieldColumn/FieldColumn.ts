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

    squash(): void {
        let groups: CellInterface[][] = []

        let lastAddedHeight: number|null = null
        let group: CellInterface[] = []
        for (let row = this.height - 1; row >= 0; row--) {
            let cell = this.getCellAt(row)

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
            let row = lowestCell.getRow() + 1
            
            while (this.isCellExist(row) && this.isCellEmpty(row)) {
                row++;
            }
            
            i.forEach(j => {
                this.setCell(j.getRow(), new CellEmpty(j.getColumn(), j.getRow()))
                let newRow = j.getRow() + row
                this.setCell(newRow, j)
                j.setRow(newRow)
            })
        })
    }

    isCellEmpty(row: number): boolean {
        return this.getCellAt(row) instanceof CellEmpty;
    }
}