import { CellInterface } from "../../Cell/CellInterface";
import { EventInterface } from "../../Event/EventInterface";
import { EVENT_TYPES } from "../../event_types";

export class CellBurnEndEvent implements EventInterface {
    constructor() {
    }

    getEventName(): string {
        return EVENT_TYPES.CELL_BURN_END
    }

    getArgs(): any[] {
        return []
    }
}