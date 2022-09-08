import { EVENT_TYPES } from "../event_types";
import { EventInterface } from "./EventInterface";

export class InitGameEvent implements EventInterface {
    getEventName(): string {
        return EVENT_TYPES.INIT_GAME
    }
    getArgs(): any[] {
        return []
    }

}