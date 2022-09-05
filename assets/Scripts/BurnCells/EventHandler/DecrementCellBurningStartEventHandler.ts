import { EventTarget } from "cc";
import { injected } from "saloeater-brandi";
import { EventClass } from "../../Event/event";
import { EventHandlerInterface } from "../../Event/EventHandlerInterface";
import { EVENT_TYPES } from "../../event_types";
import { TYPES } from "../../types";
import { CellBurningCountStorageInterface } from "../CellBurningCountStorageInterface";
import { CellsBurnEndEvent } from "../Event/CellsBurnEndEvent";

export class DecrementCellBurningStartEventHandler implements EventHandlerInterface {

    constructor(
        private countStorage: CellBurningCountStorageInterface
    ) {

    }

    handle() {
        this.countStorage.decrement()
        if (this.countStorage.get() === 0) {
            EventClass.emitEvent(new CellsBurnEndEvent())
        }
    }

}

injected(DecrementCellBurningStartEventHandler, TYPES.cellBurningCountStorage.optional)