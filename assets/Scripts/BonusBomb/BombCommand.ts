import { injected } from "saloeater-brandi";
import { CellBurningServiceInterface } from "../BurnCells/CellBurningServiceInterface";
import { CellsBurnStartEvent } from "../BurnCells/Event/CellsBurnStartEvent";
import { InputStateInterface } from "../CocosCreator/InputStateInterface";
import { EventClass } from "../Event/event";
import { Field } from "../Field/Field";
import { TYPES } from "../types";
import { BombCommandInterface } from "./BombCommandInterface";
import { CellsInRadiusInterface } from "./CellsInRadiusServiceInterface";

export class BombCommand implements BombCommandInterface {
    constructor(
        private cellsInRadius: CellsInRadiusInterface,
        private cellBurningService: CellBurningServiceInterface,
        private inputState: InputStateInterface,
    ) {
    }

    execute(field: Field, column: number, row: number, radius: number): void {
        if (!this.inputState.isOn()) {
            return;
        }
        
        let cellsInRadius = this.cellsInRadius.findCellsInRadius(field, column, row, radius)
        let originCell = field.getCellAt(column, row)
        cellsInRadius.push(originCell)
        this.emitEvent(cellsInRadius.length, field, column, row)
        cellsInRadius.forEach(i => this.cellBurningService.burnCell(field, i, originCell))
    }

    protected emitEvent(length: number, field: Field, column: number, row: number) {
        EventClass.emitEvent(new CellsBurnStartEvent(length, field, column, row));
    }
}

injected(
    BombCommand,
    TYPES.cellsInRadius.optional,
    TYPES.cellBurningService.optional,
    TYPES.inputState.optional,
)