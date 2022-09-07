import { EventInterface } from "../../Event/EventInterface";
import { EVENT_TYPES } from "../../event_types";

export class BonusChangedEvent implements EventInterface {
    getEventName(): string {
        return EVENT_TYPES.BONUS_CHANGED
    }
    getArgs(): any[] {
        return []
    }

}