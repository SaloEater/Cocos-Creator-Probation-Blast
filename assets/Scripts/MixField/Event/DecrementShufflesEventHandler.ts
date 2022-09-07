import { injected } from "saloeater-brandi";
import { EventClass } from "../../Event/event";
import { EventHandlerInterface } from "../../Event/EventHandlerInterface";
import { PointsStorageInterface } from "../../Points/PointsStorageInterface";
import { TYPES } from "../../types";

export class DecrementShufflesEventHandler implements EventHandlerInterface {
    constructor(
        private shufflesStorage: PointsStorageInterface
    ) {
    }

    handle() {
        this.shufflesStorage.decrement()
        // Оповещение что хранилище было изменено
    }
}

injected(DecrementShufflesEventHandler, TYPES.shufflesStorage.optional)