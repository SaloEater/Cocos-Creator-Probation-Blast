import { EventInterface } from "../../Event/EventInterface";
import { EVENT_TYPES } from "../../event_types";

export class CellsBurnStartEvent implements EventInterface {
    constructor(private count: number) {
    }

    getEventName(): string {
        return EVENT_TYPES.CELLS_BURN_START
    }

    getArgs(): any[] {
        return [this.count]
    }
}