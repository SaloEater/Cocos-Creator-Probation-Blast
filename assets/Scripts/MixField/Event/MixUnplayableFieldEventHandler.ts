import { injected } from "saloeater-brandi";
import { container } from "../../container";
import { EventClass } from "../../Event/event";
import { EventHandlerInterface } from "../../Event/EventHandlerInterface";
import { Field } from "../../Field/Field";
import { TYPES } from "../../types";
import { MixFieldInterface } from "../MixFieldInterface";
import { UnplayableFieldWasMixedEvent } from "./UnplayableFieldWasMixedEvent";

export class MixUnplayableFieldEventHandler implements EventHandlerInterface {
    private mixField: MixFieldInterface

    handle(field: Field) {
        this.initDI()
        this.mixField.mixField(field)
    }

    initDI() {
        this.mixField = container.get(TYPES.mixField)
    }
}