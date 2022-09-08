import { injected } from "saloeater-brandi";
import { EventHandlerInterface } from "../../Event/EventHandlerInterface";
import { Field } from "../../Field/Field";
import { TYPES } from "../../types";
import { CellSuperLocationStorage } from "../CellSuperLocationStorage";
import { CellSuper } from "../Component/CellSuper";

export class CellSuperLocationInitialzeEventHandler implements EventHandlerInterface {
    constructor(
        private cellSuperLocationStorage: CellSuperLocationStorage
    ) {
    }

    handle(count: number, field: Field, column: number, row: number) {
        this.cellSuperLocationStorage.setField(field)
        this.cellSuperLocationStorage.setColumn(column)
        this.cellSuperLocationStorage.setRow(row)
        this.cellSuperLocationStorage.setCellSuper(
            field.getCellAt(column, row) instanceof CellSuper
        )
    }
}

injected(CellSuperLocationInitialzeEventHandler, TYPES.cellSuperLocationStorage.optional)