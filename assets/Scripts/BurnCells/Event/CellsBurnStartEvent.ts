import { EventInterface } from "../../Event/EventInterface";
import { EVENT_TYPES } from "../../event_types";
import { Field } from "../../Field/Field";

export class CellsBurnStartEvent implements EventInterface {
    constructor(
        private count: number,
        private field: Field,
        private column: number,
        private row: number,
    ) {
    }

    getEventName(): string {
        return EVENT_TYPES.CELLS_BURN_START
    }

    getArgs(): any[] {
        return [this.count, this.field, this.column, this.row]
    }
}