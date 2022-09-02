import { CellEmpty } from "../Cell/CellEmpty";
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
    
    isCellExist(column: number, row: number): boolean {
        return column >= 0 
            && column < this.columns
            && this.getColumnAt(column).isCellExist(row)
    }

    getColumnAt(column: number): FieldColumn {
        return this.field.get(column)
    }

    getCellAt(column: number, row: number): CellInterface {
        return this.field.get(column).getCellAt(row)
    }
        
    getAllNeighbourSimilarCells(
        column: number,
        row: number,
        cell: CellInterface,
        neighbours: CellInterface[] = []
    ): CellInterface[] {
        if (neighbours.length === 0) {
            neighbours.push(this.getCellAt(column, row))
        }

        let neighbourMap = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ]

        let cellPrototype = Object.getPrototypeOf(cell)
        let localNeighbours = neighbourMap.filter(i =>
            this.isCellExist(
                this.getNeighbourMapColumn(column, i),
                this.getNeighbourMapRow(row, i)
            )
        ).filter(i => this.isSameType(column, i, row, cellPrototype))
        .filter(i => this.isNewNeighbour(column, i, row, neighbours))
        .map(i =>
            this.getCellAt(
                this.getNeighbourMapColumn(column, i),
                this.getNeighbourMapRow(row, i)
            )
        )

        let oldNeighbours = [...neighbours, ...localNeighbours]
        let newNeighbours = [...localNeighbours]

        localNeighbours.forEach(i => {
            let nestedNieghbours = this.getAllNeighbourSimilarCells(
                i.getColumn(),
                i.getRow(),
                cell,
                oldNeighbours
            )
            
            if (nestedNieghbours.length > 0) {
                newNeighbours = [...newNeighbours, ...nestedNieghbours]
            }
        })
       
        return newNeighbours
    }
    
    private isNewNeighbour(column: number, i: number[], row: number, neighbours: CellInterface[]) {
        let neighbourCell = this.getCellAt(
            this.getNeighbourMapColumn(column, i),
            this.getNeighbourMapRow(row, i)
        );

        return !neighbours.find(i => i.getColumn() == neighbourCell.getColumn()
            && i.getRow() == neighbourCell.getRow()
        );
    }

    private getNeighbourMapColumn (column: number, mapEntry: number[]): number {
        return column + mapEntry[0]
    }
    
    private getNeighbourMapRow (row: number, mapEntry: number[]): number {
        return row + mapEntry[1]
    }

    private isSameType(column: number, i: number[], row: number, cellPrototype: any) {
        let neighbourCell = this.getCellAt(
            this.getNeighbourMapColumn(column, i),
            this.getNeighbourMapRow(row, i)
        );

        return Object.getPrototypeOf(neighbourCell) === cellPrototype;
    }

    squash() {
        this.field.forEach(i => i.squash())
    }
}