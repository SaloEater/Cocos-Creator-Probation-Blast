import { injected } from "saloeater-brandi";
import { CellVisual } from "../Cell/Component/CellVisual";
import { Field } from "../Field/Field";
import { TYPES } from "../types";
import { SwapCommandInterface } from "./SwapCommandInterface";
import { SwapStorage } from "./SwapStorage";

export class SwapCommand implements SwapCommandInterface {
    constructor(
        private swapStorage: SwapStorage,
    ) {
    }

    execute(field: Field, column: number, row: number): void {
        if (!this.swapStorage.isSet()) {
            this.swapStorage.setOrigin(column, row)
            return
        }

        const originColumn = this.swapStorage.getOriginColumn();
        const originRow = this.swapStorage.getOriginRow();
        let originCell = field.getCellAt(originColumn, originRow) as CellVisual
        
        let targetCell = field.getCellAt(column, row) as CellVisual

        field.setCell(originColumn, originRow, targetCell)
        field.setCell(column, row, originCell)

        originCell.setCell(column,row)
        targetCell.setCell(originColumn, originRow)

        this.swapStorage.reset()
    }
}

injected(SwapCommand, TYPES.swapStorage.optional)