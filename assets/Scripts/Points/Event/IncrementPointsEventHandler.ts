import { container } from "../../container";
import { EventClass } from "../../Event/event";
import { EventHandlerInterface } from "../../Event/EventHandlerInterface";
import { CheckGameEndEvent } from "../../GameEnd/Event/CheckGameEndEvent";
import { TYPES } from "../../types";
import { PointsStorageInterface } from "../PointsStorageInterface";
import { PointsIncrementedEvent } from "./PointsIncrementedEvent";

export class IncrementPointsEventHandler implements EventHandlerInterface {
    private pointsStorage: PointsStorageInterface

    handle() {
        this.initDI()
        this.pointsStorage.increment()
        EventClass.emitEvent(new CheckGameEndEvent())
    }

    initDI() {
        this.pointsStorage = container.get(TYPES.pointsStorage)
    }

}