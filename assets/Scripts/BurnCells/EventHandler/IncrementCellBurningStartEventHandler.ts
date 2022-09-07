import { injected } from "saloeater-brandi";
import { EventHandlerInterface } from "../../Event/EventHandlerInterface";
import { TYPES } from "../../types";
import { CellBurningCountStorageInterface } from "../CellBurningCountStorageInterface";

export class IncrementCellBurningStartEventHandler implements EventHandlerInterface {
    constructor(
        private countStorage: CellBurningCountStorageInterface
    ) {
    }

    handle() {
        this.countStorage.increment()
    }
}

injected(IncrementCellBurningStartEventHandler, TYPES.cellBurningCountStorage.optional)