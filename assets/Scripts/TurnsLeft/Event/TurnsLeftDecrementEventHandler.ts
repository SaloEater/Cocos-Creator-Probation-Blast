import { injected } from "saloeater-brandi";
import { EventClass } from "../../Event/event";
import { EventHandlerInterface } from "../../Event/EventHandlerInterface";
import { PointsStorageInterface } from "../../Points/PointsStorageInterface";
import { TYPES } from "../../types";

export class TurnsLeftDecrementEventHandler implements EventHandlerInterface {
    constructor(
        private turnsLeftStorage: PointsStorageInterface
    ) {
    }

    handle() {
        this.turnsLeftStorage.decrement()
        // Оповещение что хранилище было изменено
    }
}

injected(TurnsLeftDecrementEventHandler, TYPES.turnsLeftStorage.optional)