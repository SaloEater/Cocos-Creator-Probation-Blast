import { EventInterface } from "../../Event/EventInterface";
import { EVENT_TYPES } from "../../event_types";
import { Field } from "../../Field/Field";

export class FieldFillEndEvent implements EventInterface {
    constructor(
        private field: Field
    ) {
    }
    
    getEventName(): string {
        return EVENT_TYPES.FIELD_FILL_END
    }

    getArgs(): any[] {
        return [this.field]
    }
}