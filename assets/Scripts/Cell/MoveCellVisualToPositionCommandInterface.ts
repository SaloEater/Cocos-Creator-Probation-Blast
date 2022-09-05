import { CellVisual } from "./Component/CellVisual";

export interface MoveCellVisualToPositionCommandInterface {
    execute(cell: CellVisual)
}