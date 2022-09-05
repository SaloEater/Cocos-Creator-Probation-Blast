import { EventInterface } from "../../Event/EventInterface";
import { EVENT_TYPES } from "../../event_types";

export class CellsBurnEndEvent implements EventInterface {
    constructor() {
    }

    getEventName(): string {
        return EVENT_TYPES.CELLS_BURN_END
    }

    getArgs(): any[] {
        return []
    }
}