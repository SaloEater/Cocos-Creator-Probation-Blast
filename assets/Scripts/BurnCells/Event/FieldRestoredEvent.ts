import { EventInterface } from "../../Event/EventInterface";
import { EVENT_TYPES } from "../../event_types";

export class FieldRestoredEvent implements EventInterface {
    getEventName(): string {
        return EVENT_TYPES.FIELD_RESTORED
    }

    getArgs(): any[] {
        return []
    }

}