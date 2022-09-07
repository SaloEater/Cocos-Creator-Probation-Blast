import { injected } from "saloeater-brandi";
import { EventHandlerInterface } from "../../Event/EventHandlerInterface";
import { TYPES } from "../../types";
import { SwapStorage } from "../SwapStorage";

export class ResetSwapStorageEventHandler implements EventHandlerInterface {
    constructor(
        private swapStorage: SwapStorage
    ) {
    }

    handle() {
        this.swapStorage.reset()
    }
}

injected(ResetSwapStorageEventHandler, TYPES.swapStorage.optional)