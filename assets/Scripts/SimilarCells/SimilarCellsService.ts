import { CellInterface } from "../Cell/CellInterface";
import { Field } from "../Field/Field";
import { SimilarCellsServiceInterface } from "./SimilarCellsServiceInterface";

export class SimilarCellsService implements SimilarCellsServiceInterface {
    private a: number
    constructor() {
        this.a = 1 // Манипуляция чтобы контейнер смог создать объект без new
    }
    
    findSimilarCells(
        field: Field,
        column: number,
        row: number,
        cell: CellInterface
    ): CellInterface[] {
        return this.getAllNeighbourSimilarCells(
            field,
            column,
            row,
            cell,
            [field.getCellAt(column, row)]
        )
    }

    private getAllNeighbourSimilarCells(
        field: Field,
        column: number,
        row: number,
        cell: CellInterface,
        oldNeighbours: CellInterface[] = [],
        depth: number = 1
    ): CellInterface[] {
        let localNeighbours = this.getCellNeighbours(
            cell,
            column,
            field,
            row,
            oldNeighbours
        );

        let newNeighbours = this.getNestedNeighbours(
            localNeighbours,
            field,
            cell,
            oldNeighbours,
            depth
        );
       
        return newNeighbours
    }

    private getCellNeighbours(
        cell: CellInterface,
        column: number,
        field: Field,
        row: number,
        neighbours: CellInterface[]
    ): CellInterface[] {
        const getNeighbourMapColumnIndex = (
            column: number,
            mapEntry: number[]
        ): number => column + mapEntry[0]
        
        const getNeighbourMapRowIndex = (
            row: number,
            mapEntry: number[]
        ): number => row + mapEntry[1]

        let neighbourMap = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];

        let localNeighbours = neighbourMap
        .filter(i => field.isCellExist(
            getNeighbourMapColumnIndex(column, i),
            getNeighbourMapRowIndex(row, i)
        )).filter(i => cell.hasSameType(field.getCellAt(
            getNeighbourMapColumnIndex(column, i),
            getNeighbourMapRowIndex(row, i)
        )))
        .filter(i => this.isCellANewNeighbour(
                field,
                getNeighbourMapColumnIndex(column, i),
                getNeighbourMapRowIndex(row, i),
                neighbours
        )).map(i => field.getCellAt(
            getNeighbourMapColumnIndex(column, i),
            getNeighbourMapRowIndex(row, i)
        ));
        
        return localNeighbours;
    }

    private isCellANewNeighbour(
        field: Field,
        column: number,
        row: number,
        neighbours: CellInterface[]
    ): boolean {
        let neighbourCell = field.getCellAt(
            column,
            row
        );

        return !neighbours.find(
            i => i.getColumn() == neighbourCell.getColumn()
            && i.getRow() == neighbourCell.getRow()
        );
    }

    private getNestedNeighbours(
        cellLocalNeighbours: CellInterface[],
        field: Field,
        cell: CellInterface,
        oldNeighbours: CellInterface[],
        depth: number
    ) {
        let newNeighbours = [...cellLocalNeighbours]
        cellLocalNeighbours.forEach(i => {
            let nestedNieghbours = this.getAllNeighbourSimilarCells(
                field,
                i.getColumn(),
                i.getRow(),
                cell,
                [...oldNeighbours, ...newNeighbours],
                depth + 1
            );

            if (nestedNieghbours.length > 0) {
                newNeighbours = [...newNeighbours, ...nestedNieghbours];
            }
        });

        return newNeighbours;
    }
}