import { InputStateInterface } from "../../CocosCreator/InputStateInterface";
import { container } from "../../container";
import { EventHandlerInterface } from "../../Event/EventHandlerInterface";
import { Field } from "../../Field/Field";
import { GameStateInterface } from "../../GameEnd/GameStateInterface";
import { TYPES } from "../../types";
import { MixFieldInterface } from "../MixFieldInterface";

export class MixUnplayableFieldEventHandler implements EventHandlerInterface {
    private mixField: MixFieldInterface
    private inputState: InputStateInterface
    private gameState: GameStateInterface

    handle(field: Field) {
        this.initDI()
        let inputWasOn = this.inputState.isOn()

        if (inputWasOn) {
            this.inputState.turnOff()
        }

        if (!this.gameState.hasEnd()) {
            setTimeout(() => this.mixField.mixField(field), 500)
        }
        
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
        this.gameState = container.get(TYPES.gameState)
    }
}