import { InputStateInterface } from "../../CocosCreator/InputStateInterface";
import { container } from "../../container";
import { EventHandlerInterface } from "../../Event/EventHandlerInterface";
import { Field } from "../../Field/Field";
import { TYPES } from "../../types";
import { MixFieldInterface } from "../MixFieldInterface";

export class MixUnplayableFieldEventHandler implements EventHandlerInterface {
    private mixField: MixFieldInterface
    private inputState: InputStateInterface

    handle(field: Field) {
        this.initDI()
        let inputWasOn = this.inputState.isOn()

        if (inputWasOn) {
            this.inputState.turnOff()
        }

        setTimeout(() => this.mixField.mixField(field), 500)
        
        if (this.inputBecameOff(inputWasOn)) {
            this.inputState.turnOn()
        }
    }

    private inputBecameOff(inputWasOn: boolean) {
        return inputWasOn && !this.inputState.isOn();
    }

    initDI() {
        this.mixField = container.get(TYPES.mixField)
        this.inputState = container.get(TYPES.inputState)
    }
}