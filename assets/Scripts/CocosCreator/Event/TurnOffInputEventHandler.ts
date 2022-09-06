import { injected } from "saloeater-brandi";
import { EventHandlerInterface } from "../../Event/EventHandlerInterface";
import { TYPES } from "../../types";
import { InputStateInterface } from "../InputStateInterface";

export class TurnOffInputEventHandler implements EventHandlerInterface {
    constructor(
        private inputState: InputStateInterface
    ) {
    }

    handle() {
        this.inputState.turnOff()
    }
}

injected(TurnOffInputEventHandler, TYPES.inputState.optional)