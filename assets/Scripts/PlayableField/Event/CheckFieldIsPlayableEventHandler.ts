import { container } from "../../container";
import { EventHandlerInterface } from "../../Event/EventHandlerInterface";
import { Field } from "../../Field/Field";
import { TYPES } from "../../types";
import { PlayableFieldInterface } from "../PlayableFieldInterface";

export class CheckFieldIsPlayableEventHandler implements EventHandlerInterface {
    private playableField: PlayableFieldInterface

    handle(field: Field) {
        this.initDI()
        this.playableField.ensureFieldIsPlayable(field)
    }

    initDI() {
        this.playableField = container.get(TYPES.playableField)
    }
}