import { injected } from "saloeater-brandi";
import { container } from "../../container";
import { EventHandlerInterface } from "../../Event/EventHandlerInterface";
import { FieldStorageInterface } from "../../Field/FieldStorageInterface";
import { SquashFieldInterface } from "../../SquashField/SquashFieldServiceInterface";
import { TYPES } from "../../types";
import { CellBurningCountStorageInterface } from "../CellBurningCountStorageInterface";

export class CellBurningEndEventHandler implements EventHandlerInterface {
    private squashService: SquashFieldInterface
    private fieldStorage: FieldStorageInterface

    handle() {
        this.initDI()
        let field = this.fieldStorage.get()
        this.squashService.squash(field)
    }

    initDI() {
        this.squashService = container.get(TYPES.squashService)
        this.fieldStorage = container.get(TYPES.fieldStorage)
    }
}