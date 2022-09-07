import { injected } from "saloeater-brandi";
import { CellBurnCommandInterface } from "../BurnCells/CellBurnCommandInterface";
import { CellBurningServiceInterface } from "../BurnCells/CellBurningServiceInterface";
import { CellsBurnStartEvent } from "../BurnCells/Event/CellsBurnStartEvent";
import { EventClass } from "../Event/event";
import { Field } from "../Field/Field";
import { TYPES } from "../types";
import { BombCommandInterface } from "./BombCommandInterface";
import { CellsInRadiusInterface } from "./CellsInRadiusServiceInterface";

export class BombCommand implements BombCommandInterface {
    constructor(
        private cellsInRadius: CellsInRadiusInterface,
        private cellBurningService: CellBurningServiceInterface
    ) {
    }

    execute(field: Field, column: number, row: number, radius: number): void {
        let cellsInRadius = this.cellsInRadius.findCellsInRadius(field, column, row, radius)
        let originCell = field.getCellAt(column, row)
        cellsInRadius.push(originCell)
        this.emitEvent(cellsInRadius.length)
        cellsInRadius.forEach(i => this.cellBurningService.burnCell(field, i, originCell))
    }

    protected emitEvent(length: number) {
        EventClass.emitEvent(new CellsBurnStartEvent(length));
    }
}

injected(
    BombCommand,
    TYPES.cellsInRadius.optional,
    TYPES.cellBurningService.optional,
)