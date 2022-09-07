import { EventInterface } from "../../Event/EventInterface";
import { EVENT_TYPES } from "../../event_types";

export class CheckGameEndEvent implements EventInterface {
    getEventName(): string {
        return EVENT_TYPES.CHECK_GAME_END
    }
    getArgs(): any[] {
        return []
    }

}