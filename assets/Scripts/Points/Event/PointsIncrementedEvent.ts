import { EventInterface } from "../../Event/EventInterface";
import { EVENT_TYPES } from "../../event_types";

export class PointsIncrementedEvent implements EventInterface {
    getEventName(): string {
        return EVENT_TYPES.POINTS_INCREMENTED
    }

    getArgs(): any[] {
        return []
    }
}