import { isValid } from "cc";
import { injected } from "saloeater-brandi";
import { CellInterface } from "../Cell/CellInterface";
import { Field } from "../Field/Field";
import { SimilarCellsService } from "../SimilarCells/SimilarCellsService";
import { CellsInRadiusInterface } from "./CellsInRadiusServiceInterface";

export class CellsInRadiusService extends SimilarCellsService implements CellsInRadiusInterface {
    radius: number

    findCellsInRadius(field: Field, column: number, row: number, radius: number): CellInterface[] {
        this.radius = radius
        return this.findSimilarCells(
            field,
            column,
            row,
            field.getCellAt(column, row),
        )
    }

    protected isValid(cell: CellInterface, field: Field, column: number, row: number): boolean {
        return this.cellDistance(cell, field.getCellAt(column, row)) <= this.radius
    }

    cellDistance(i: CellInterface, j: CellInterface): number {
        return Math.abs(i.getColumn() - j.getColumn()) + Math.abs(i.getRow() - j.getRow())
    }
}