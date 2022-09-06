import { injected } from "saloeater-brandi";
import { EventHandlerInterface } from "../../Event/EventHandlerInterface";
import { TYPES } from "../../types";
import { InputStateInterface } from "../InputStateInterface";

export class TurnOnInputEventHandler implements EventHandlerInterface {
    constructor(
        private inputState: InputStateInterface
    ) {
    }

    handle() {
        this.inputState.turnOn()
    }
}

injected(TurnOnInputEventHandler, TYPES.inputState.optional)