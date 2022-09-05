import { CellInterface } from "./CellInterface";
import { CellVisual } from "./Component/CellVisual";

export interface CellVisualDestroyCommandInterface {
    execute(cell: CellVisual, originCell: CellInterface)
}