import { injected } from "saloeater-brandi";
import { CellEmpty } from "../Cell/CellEmpty";
import { CellInterface } from "../Cell/CellInterface";
import { CellVisualMoveDownCommandInterface } from "../Cell/CellVisualMoveDownCommandInterface";
import { CellVisual } from "../Cell/Component/CellVisual";
import { Field } from "../Field/Field";
import { FieldColumn } from "../FieldColumn/FieldColumn";
import { TYPES } from "../types";
import { SquashFieldService } from "./SquashFieldService";
import { SquashFieldInterface } from "./SquashFieldServiceInterface";

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