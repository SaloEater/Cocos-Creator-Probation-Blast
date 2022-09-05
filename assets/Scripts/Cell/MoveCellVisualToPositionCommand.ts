import { injected } from "saloeater-brandi";
import { TYPES } from "../types";
import { CellPositionCalculationsInterface } from "./CellPositionCalculationsInterface";
import { CellVisual } from "./Component/CellVisual";
import { MoveCellVisualToPositionCommandInterface } from "./MoveCellVisualToPositionCommandInterface";

export class MoveCellVisualToPositionCommand implements MoveCellVisualToPositionCommandInterface {
    constructor(
        private cellPositionCalculations: CellPositionCalculationsInterface
    ) {
    } 

    execute(cell: CellVisual) {
        cell.startMovingTo(
            this.cellPositionCalculations.getXForColumn(cell.getColumn()),
            this.cellPositionCalculations.getYForRow(cell.getRow()),
        )
    }
}

injected(MoveCellVisualToPositionCommand, TYPES.cellPositionCalculations.optional)