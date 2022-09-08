import { injected } from "saloeater-brandi";
import { EventHandlerInterface } from "../../Event/EventHandlerInterface";
import { FieldStorageInterface } from "../../Field/FieldStorageInterface";
import { TYPES } from "../../types";
import { FillFieldServiceInterface } from "../FillFieldServiceInterface";

export class InitFieldFillEventHandler implements EventHandlerInterface {
    constructor(
        private fieldStorage: FieldStorageInterface,
        private fillService: FillFieldServiceInterface,
    ) {
    }

    handle() {
        this.fillService.fill(this.fieldStorage.get())
    }
}

injected(InitFieldFillEventHandler, TYPES.fieldStorage.optional, TYPES.fillFieldService.optional)
