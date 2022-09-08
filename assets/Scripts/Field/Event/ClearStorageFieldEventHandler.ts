import { injected } from "saloeater-brandi";
import { CellVisual } from "../../Cell/Component/CellVisual";
import { EventHandlerInterface } from "../../Event/EventHandlerInterface";
import { TYPES } from "../../types";
import { FieldStorageInterface } from "../FieldStorageInterface";

export class ClearStorageFieldEventHandler implements EventHandlerInterface {
    constructor(
        private fieldStorage: FieldStorageInterface
    ) {        
    }

    handle() {
        let oldField = this.fieldStorage.get()
        if (oldField) {
            oldField.field.forEach(i => {
                i.cells.forEach(j => {
                    if (j instanceof CellVisual) {
                        j.destroyCell()
                    }
                })
            })
        }
    }
}

injected(ClearStorageFieldEventHandler, TYPES.fieldStorage.optional)