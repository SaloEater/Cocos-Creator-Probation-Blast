import { injected } from "saloeater-brandi";
import { EventHandlerInterface } from "../../Event/EventHandlerInterface";
import { TYPES } from "../../types";
import { CellBurningCountStorageInterface } from "../CellBurningCountStorageInterface";

export class CellBurningStartEventHandler implements EventHandlerInterface {
    constructor(
        private countStorage: CellBurningCountStorageInterface
    ) {
    }

    handle(count: number) {
        this.countStorage.set(count)
    }

}

injected(CellBurningStartEventHandler, TYPES.cellBurningCountStorage.optional)