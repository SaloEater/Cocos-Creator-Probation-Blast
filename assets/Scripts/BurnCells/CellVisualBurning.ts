import { CellEmpty } from "../Cell/CellEmpty";
import { CellBurningServiceInterface } from "./CellBurningServiceInterface";
import { Field } from "../Field/Field";
import { SimilarCellsServiceInterface } from "../SimilarCells/SimilarCellsServiceInterface";
import { container } from "../container";
import { TYPES } from "../types";
import { CellInterface } from "../Cell/CellInterface";
import { CellVisual } from "../Cell/Component/CellVisual";
import { CellBurningService } from "./CellBurningService";

export class VisualCellBurningService extends CellBurningService {
    protected replaceCell(field: Field, i: CellInterface): void {
        (i as CellVisual).destroyCell()

        return super.replaceCell(field, i)
    }
}