import { EventInterface } from "../../Event/EventInterface";
import { EVENT_TYPES } from "../../event_types";
import { Field } from "../../Field/Field";

export class FieldIsUnplayableEvent implements EventInterface {
    constructor(
        private field: Field
    ) {
    }

    getEventName(): string {
        return EVENT_TYPES.FIELD_IS_UNPLAYABLE
    }

    getArgs(): any[] {
        return [this.field]
    }
}