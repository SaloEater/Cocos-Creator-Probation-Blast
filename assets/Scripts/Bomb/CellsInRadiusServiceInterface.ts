import { isValid } from "cc";
import { CellInterface } from "../Cell/CellInterface";
import { Field } from "../Field/Field";
import { SimilarCellsService } from "../SimilarCells/SimilarCellsService";

export interface CellsInRadiusInterface {
    findCellsInRadius(
        field: Field,
        column: number,
        row: number,
        radius: number,
    ): CellInterface[]
}