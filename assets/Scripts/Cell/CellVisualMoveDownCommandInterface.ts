import { CellVisual } from "./Component/CellVisual";

export interface CellVisualMoveDownCommandInterface {
    execute(cell: CellVisual, newRow: number): void
}