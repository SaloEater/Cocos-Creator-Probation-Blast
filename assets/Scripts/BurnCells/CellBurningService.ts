import { CellEmpty } from "../Cell/CellEmpty";
import { CellBurningServiceInterface } from "./CellBurningServiceInterface";
import { Field } from "../Field/Field";
import { SimilarCellsServiceInterface } from "../SimilarCells/SimilarCellsServiceInterface";
import { TYPES } from "../types";
import { CellInterface } from "../Cell/CellInterface";
import { injected } from "saloeater-brandi";
import { EventTarget } from "cc";
import { EVENT_TYPES } from "../event_types";
import { EventClass } from "../Event/event";
import { CellsBurnStartEvent } from "./Event/CellsBurnStartEvent";

export class CellBurningService implements CellBurningServiceInterface {
    constructor(private similarCellsService: SimilarCellsServiceInterface) {
    }

    burnCellsAt(field: Field, column: number, row: number, mininumAmount: number) {
        let cell = field.getCellAt(column, row)
        let similarCells = this.similarCellsService.findSimilarCells(
            field,
            column,
            row,
            cell
        )
        similarCells.push(cell)
        
        if (similarCells.length >= mininumAmount) {
            this.emitEvent(similarCells.length);
            similarCells.forEach(i => this.burnCell(field, i, cell)
            )
        }
    }

    burnCell(field: Field, destroyedCell: CellInterface, originCell: CellInterface): void {
        return field.setCell(
            destroyedCell.getColumn(),
            destroyedCell.getRow(),
            new CellEmpty(destroyedCell.getColumn(), destroyedCell.getRow())
        );
    }

    protected emitEvent(length: number) {
        EventClass.emitEvent(new CellsBurnStartEvent(length));
    }
}

injected(CellBurningService, TYPES.similarCellsService.optional)