import { _decorator, Component, EventHandler, EventTarget } from "cc";
import { CellsBurningEndEventHandler } from "../BurnCells/EventHandler/CellBurningEndEventHandler";
import { container } from "../container";
import { EventClass } from "../Event/event";
import { EVENT_TYPES } from "../event_types";
import { MixUnplayableFieldEventHandler } from "../MixField/Event/MixUnplayableFieldEventHandler";
import { CheckFieldIsPlayableEventHandler } from "../PlayableField/Event/CheckFieldIsPlayableEventHandler";
import { IncrementPointsEventHandler } from "../Points/Event/IncrementPointsEventHandler";
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
                    container.get(TYPES.eventTurnOffInputState),
                ]
            },    
            {
                'event': EVENT_TYPES.CELL_BURN_END,
                'listeners': [
                    container.get(TYPES.eventHandlerDecrementCellBurningStart),
                    new IncrementPointsEventHandler(),
                ]
            },    
            {
                'event': EVENT_TYPES.CELLS_BURN_END,
                'listeners': [
                    new CellsBurningEndEventHandler(),
                    container.get(TYPES.eventTurnOnInputState),
                ]
            },    
            {
                'event': EVENT_TYPES.FIELD_FILL_END,
                'listeners': [
                    new CheckFieldIsPlayableEventHandler(),
                ]
            },    
            {
                'event': EVENT_TYPES.UNPLAYABLE_FIELD_WAS_MIXED,
                'listeners': [
                    new CheckFieldIsPlayableEventHandler(),
                    //Подписать убавление очков перемешивания
                ]
            },    
            {
                'event': EVENT_TYPES.FIELD_IS_UNPLAYABLE,
                'listeners': [
                    new MixUnplayableFieldEventHandler(),
                ]
            },    
        ]
    }
}