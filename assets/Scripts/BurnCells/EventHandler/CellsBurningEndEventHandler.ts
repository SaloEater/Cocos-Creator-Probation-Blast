import { container } from "../../container";
import { EventClass } from "../../Event/event";
import { EventHandlerInterface } from "../../Event/EventHandlerInterface";
import { FieldStorageInterface } from "../../Field/FieldStorageInterface";
import { FillFieldServiceInterface } from "../../FillField/FillFieldServiceInterface";
import { SquashFieldInterface } from "../../SquashField/SquashFieldServiceInterface";
import { TYPES } from "../../types";
import { FieldRestoredEvent } from "../Event/FieldRestoredEvent";

export class RestoreFieldEventHandler implements EventHandlerInterface {
    private squashService: SquashFieldInterface
    private fieldStorage: FieldStorageInterface
    private fillFieldService: FillFieldServiceInterface

    handle() {
        this.initDI()
        let field = this.fieldStorage.get()
        this.squashService.squash(field)
        this.fillFieldService.fill(field)
        EventClass.emitEvent(new FieldRestoredEvent())
    }

    initDI() {
        if (!this.squashService) {
            this.squashService = container.get(TYPES.squashService)
        }

        if (!this.fieldStorage) {
            this.fieldStorage = container.get(TYPES.fieldStorage)
        }

        if (!this.fillFieldService) {
            this.fillFieldService = container.get(TYPES.fillFieldService)
        }
    }
}