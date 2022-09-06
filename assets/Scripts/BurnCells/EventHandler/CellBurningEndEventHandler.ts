import { injected } from "saloeater-brandi";
import { container } from "../../container";
import { EventHandlerInterface } from "../../Event/EventHandlerInterface";
import { FieldStorageInterface } from "../../Field/FieldStorageInterface";
import { FillFieldServiceInterface } from "../../FillField/FillFieldServiceInterface";
import { SquashFieldInterface } from "../../SquashField/SquashFieldServiceInterface";
import { TYPES } from "../../types";
import { CellBurningCountStorageInterface } from "../CellBurningCountStorageInterface";

export class CellsBurningEndEventHandler implements EventHandlerInterface {
    private squashService: SquashFieldInterface
    private fieldStorage: FieldStorageInterface
    private fillFieldService: FillFieldServiceInterface

    handle() {
        this.initDI()
        let field = this.fieldStorage.get()
        this.squashService.squash(field)
        this.fillFieldService.fill(field)
    }

    initDI() {
        this.squashService = container.get(TYPES.squashService)
        this.fieldStorage = container.get(TYPES.fieldStorage)
        this.fillFieldService = container.get(TYPES.fillFieldService)
    }
}