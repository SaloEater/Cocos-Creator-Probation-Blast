import { CellBurningServiceInterface } from "../BurnCells/CellBurningServiceInterface";
import { CellsBurnStartEvent } from "../BurnCells/Event/CellsBurnStartEvent";
import { CellInterface } from "../Cell/CellInterface";
import { InputStateInterface } from "../CocosCreator/InputStateInterface";
import { EventClass } from "../Event/event";
import { Field } from "../Field/Field";

export abstract class BonusBurnCommand {
    constructor(
        protected cellBurningService: CellBurningServiceInterface,
        protected inputState: InputStateInterface,
    ) {        
    }
    
    abstract execute(field: Field, column: number, row: number);

    protected isInputOn(): boolean {
        return this.inputState.isOn()
    }

    protected burnCells(cells: CellInterface[], field: Field, column: number, row: number) {
        let originCell = field.getCellAt(column, row)
        this.emitEvent(cells.length, field, column, row)
        cells.push(originCell)
        cells.forEach(i => this.cellBurningService.burnCell(field, i, originCell))
    }

    protected emitEvent(length: number, field: Field, column: number, row: number) {
        EventClass.emitEvent(new CellsBurnStartEvent(length, field, column, row));
    }
}