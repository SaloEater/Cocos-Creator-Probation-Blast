import { _decorator, Component, EventHandler, EventTarget } from "cc";
import { CellBurningEndEventHandler } from "../BurnCells/EventHandler/CellBurningEndEventHandler";
import { container } from "../container";
import { EventClass } from "../Event/event";
import { EVENT_TYPES } from "../event_types";
import { TYPES } from "../types";

const {ccclass} = _decorator

@ccclass
export class InitEventsComponent extends Component {
    start() {
        this.getEvents().forEach(i => i.listeners.forEach(j => EventClass.registerEvent(i.event, j)))
    }

    getEvents(): any[] {
        return [
            {
                'event': EVENT_TYPES.CELLS_BURN_START,
                'listeners': [
                    container.get(TYPES.eventHandlerCellBurningStart),
                ]
            },    
            {
                'event': EVENT_TYPES.CELL_BURN_END,
                'listeners': [
                    container.get(TYPES.eventHandlerDecrementCellBurningStart),
                ]
            },    
            {
                'event': EVENT_TYPES.CELLS_BURN_END,
                'listeners': [
                    new CellBurningEndEventHandler(),
                ]
            },    
        ]
    }
}