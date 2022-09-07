import { injected } from "saloeater-brandi";
import { CellPositionCalculationsInterface } from "../Cell/CellPositionCalculationsInterface";
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
        originCell.setCell(column,row)
        
        let targetCell = field.getCellAt(column, row) as CellVisual
        targetCell.setCell(originColumn, originRow)
        this.swapStorage.reset()
    }
}

injected(SwapCommand, TYPES.swapStorage.optional)