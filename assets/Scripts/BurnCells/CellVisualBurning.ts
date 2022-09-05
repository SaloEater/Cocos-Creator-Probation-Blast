import { Field } from "../Field/Field";
import { CellInterface } from "../Cell/CellInterface";
import { CellVisual } from "../Cell/Component/CellVisual";
import { CellBurningService } from "./CellBurningService";
import { injected } from "saloeater-brandi";
import { TYPES } from "../types";
import { SimilarCellsServiceInterface } from "../SimilarCells/SimilarCellsServiceInterface";
import { CellVisualDestroyCommandInterface } from "../Cell/CellVisualDestroyCommandInterface";

export class VisualCellBurningService extends CellBurningService {
    constructor(
        similarCellsService: SimilarCellsServiceInterface,
        private cellVisualDestoryCommand: CellVisualDestroyCommandInterface
    ) {
        super(similarCellsService)
    }
    
    protected replaceCell(field: Field, i: CellInterface, originCell: CellInterface): void {
        this.cellVisualDestoryCommand.execute((i as CellVisual), originCell)

        return super.replaceCell(field, i, originCell)
    }
}

injected(VisualCellBurningService, TYPES.similarCellsService.optional, TYPES.cellVisualDestroyCommand.optional)