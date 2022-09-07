import { CellsBurnStartEvent } from "../BurnCells/Event/CellsBurnStartEvent";
import { InputStateInterface } from "../CocosCreator/InputStateInterface";
import { EventClass } from "../Event/event";
import { Field } from "../Field/Field";

export abstract class CellSuperBurnCommand {
    constructor(
        private inputState: InputStateInterface,
    ) {
    }

    abstract execute(field: Field, column: number, row: number);

    protected isInputOn(): boolean {
        return this.inputState.isOn()
    }

    protected emitEvent(length: number, field: Field, column: number, row: number) {
        EventClass.emitEvent(new CellsBurnStartEvent(length, field, column, row));
    }
}