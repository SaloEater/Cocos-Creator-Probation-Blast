import { injected } from "saloeater-brandi";
import { CellsPoolInterface } from "../Cell/CellsPoolInterface";
import { CellVisualInstanceService } from "../Cell/CellVisualInstanceService";
import { CellVisual } from "../Cell/Component/CellVisual";
import { EventClass } from "../Event/event";
import { Field } from "../Field/Field";
import { SquashFieldInterface } from "../SquashField/SquashFieldServiceInterface";
import { TYPES } from "../types";
import { FieldFillEndEvent } from "./Event/FieldFillEndEvent";
import { FillFieldServiceInterface } from "./FillFieldServiceInterface";

export class FillVisualFieldService implements FillFieldServiceInterface {
    constructor(
        private squashService: SquashFieldInterface,
        private cellsPool: CellsPoolInterface,
        private cellVisualInstanceService: CellVisualInstanceService
    ) {
    }

    fill(field: Field): void {
        field.getNotFullColumns().forEach(i => {
            do {
                let cellPrefab = this.cellsPool.getAnyCellPrefab()
                let cellNode = this.cellVisualInstanceService.instantiate(cellPrefab)
                let cellVisual = cellNode.getComponent(CellVisual)

                cellVisual.setColumn(i.columnIndex)
                cellVisual.setRow(0)

                i.setCell(0, cellVisual)
                this.squashService.squashColumn(i)
            } while (!i.isFull())
        })
        EventClass.emitEvent(new FieldFillEndEvent(field))
    }
}

injected(
    FillVisualFieldService,
    TYPES.squashService.optional,
    TYPES.cellsPool.optional,
    TYPES.cellVisualInstanceService.optional,
)