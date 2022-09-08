import { _decorator, Component } from "cc";
import { RestoreFieldEventHandler } from "../BurnCells/EventHandler/CellsBurningEndEventHandler";
import { CellSuperSpawnEventHandler } from "../CellSuper/Event/CellSuperSpawnEventHandler";
import { container } from "../container";
import { EventClass } from "../Event/event";
import { EVENT_TYPES } from "../event_types";
import { CheckGameEndEventHandler } from "../GameEnd/Event/CheckGameEndEventHandler";
import { MixUnplayableFieldEventHandler } from "../MixField/Event/MixUnplayableFieldEventHandler";
import { CheckFieldIsPlayableEventHandler } from "../PlayableField/Event/CheckFieldIsPlayableEventHandler";
import { IncrementPointsEventHandler } from "../Points/Event/IncrementPointsEventHandler";
import { TYPES } from "../types";

const {ccclass} = _decorator

@ccclass
export class InitEventsComponent extends Component {
    static init: boolean = false
    start() {
        if (!InitEventsComponent.init) {
            this.getEvents().forEach(i => i.listeners.forEach(j => EventClass.registerEvent(i.event, j)))
            InitEventsComponent.init = true
        }
    }

    getEvents(): any[] {
        return [
            {
                'event': EVENT_TYPES.CELLS_BURN_START,
                'listeners': [
                    container.get(TYPES.eventHandlerCellBurningStart),
                    container.get(TYPES.eventHandlerTurnOffInputState),
                    container.get(TYPES.eventHandlerCellSuperLocationInitialze),
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
                    new RestoreFieldEventHandler(),
                    container.get(TYPES.eventHandlerTurnOnInputState),
                    container.get(TYPES.eventHandlerDecrementTurns),
                    new CheckGameEndEventHandler(),
                ]
            },    
            {
                'event': EVENT_TYPES.FIELD_FILL_END,
                'listeners': [
                    new CheckGameEndEventHandler(),
                    new CheckFieldIsPlayableEventHandler(),
                ]
            },    
            {
                'event': EVENT_TYPES.UNPLAYABLE_FIELD_WAS_MIXED,
                'listeners': [
                    container.get(TYPES.eventHandlerDecrementShuffles),
                    new CheckGameEndEventHandler(),
                    new CheckFieldIsPlayableEventHandler(),
                ]
            },    
            {
                'event': EVENT_TYPES.FIELD_IS_UNPLAYABLE,
                'listeners': [
                    new MixUnplayableFieldEventHandler(),
                ]
            },    
            {
                'event': EVENT_TYPES.BONUS_CHANGED,
                'listeners': [
                    container.get(TYPES.eventHandlerResetSwapStorage)
                ]
            },    
            {
                'event': EVENT_TYPES.FIELD_RESTORED,
                'listeners': [
                    new CellSuperSpawnEventHandler(),
                ]
            },    
            {
                'event': EVENT_TYPES.INIT_GAME,
                'listeners': [
                    container.get(TYPES.eventHandlerClearStorageField),
                    container.get(TYPES.eventHandlerInitShuffleStorage),
                    container.get(TYPES.eventHandlerInitTurnsStorage),
                    container.get(TYPES.eventHandlerInitFieldStorage),
                    container.get(TYPES.eventHandlerInitFieldFill),
                ]
            },    
        ]
    }
}