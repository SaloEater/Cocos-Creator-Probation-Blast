import { injected } from "saloeater-brandi";
import { TYPES } from "../types";
import { CellPositionCalculationsInterface } from "./CellPositionCalculationsInterface";
import { CellVisualMoveDownCommandInterface } from "./CellVisualMoveDownCommandInterface";
import { CellVisual } from "./Component/CellVisual";

export class CellVisualMoveDownCommand implements CellVisualMoveDownCommandInterface {
    constructor(
        private cellPositionCalculations: CellPositionCalculationsInterface
    ) {
    }

    execute(cell: CellVisual, newRow: number) {
        cell.startMovingTo(
            this.cellPositionCalculations.getXForColumn(cell.getColumn()),
            this.cellPositionCalculations.getYForRow(newRow),
        )
    }
}

injected(CellVisualMoveDownCommand, TYPES.cellPositionCalculations.optional)