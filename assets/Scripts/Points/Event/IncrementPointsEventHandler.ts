import { container } from "../../container";
import { EventClass } from "../../Event/event";
import { EventHandlerInterface } from "../../Event/EventHandlerInterface";
import { TYPES } from "../../types";
import { PointsStorageInterface } from "../PointsStorageInterface";
import { PointsIncrementedEvent } from "./PointsIncrementedEvent";

export class IncrementPointsEventHandler implements EventHandlerInterface {
    private pointsStorage: PointsStorageInterface

    handle() {
        this.initDI()
        this.pointsStorage.increment()
        EventClass.emitEvent(new PointsIncrementedEvent())
    }

    initDI() {
        this.pointsStorage = container.get(TYPES.pointsStorage)
    }

}