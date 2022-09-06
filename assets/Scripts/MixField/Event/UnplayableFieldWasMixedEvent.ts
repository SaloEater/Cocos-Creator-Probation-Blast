import { EventInterface } from "../../Event/EventInterface";
import { EVENT_TYPES } from "../../event_types";
import { Field } from "../../Field/Field";

export class UnplayableFieldWasMixedEvent implements EventInterface {
    constructor(
        private field: Field
    ) {
    }

    getEventName(): string {
        return EVENT_TYPES.UNPLAYABLE_FIELD_WAS_MIXED
    }
    
    getArgs(): any[] {
        return [this.field]
    }

}