import { Field } from "../Field/Field";
import { CellInterface } from "../Cell/CellInterface";
import { CellVisual } from "../Cell/Component/CellVisual";
import { CellBurningService } from "./CellBurningService";

export class VisualCellBurningService extends CellBurningService {
    protected replaceCell(field: Field, i: CellInterface): void {
        (i as CellVisual).destroyCell()

        return super.replaceCell(field, i)
    }
}