import { injected } from "saloeater-brandi";
import { CellInterface } from "../Cell/CellInterface";
import { CellVisualMoveDownCommandInterface } from "../Cell/CellVisualMoveDownCommandInterface";
import { CellVisual } from "../Cell/Component/CellVisual";
import { TYPES } from "../types";
import { SquashFieldService } from "./SquashFieldService";

export class SquashVisualFieldService extends SquashFieldService {
    constructor(
        private moveDownCommand: CellVisualMoveDownCommandInterface,
    ) {
        super()
    }

    protected moveCellDown(cell: CellInterface, newRow: number) {
        this.moveDownCommand.execute((cell as CellVisual), newRow)
        super.moveCellDown(cell, newRow)
    }
}

injected(SquashVisualFieldService, TYPES.cellVisualMoveDownCommand.optional)