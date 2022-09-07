import { injected } from "saloeater-brandi";
import { CellVisualInstanceService } from "../Cell/CellVisualInstanceService";
import { CellVisual } from "../Cell/Component/CellVisual";
import { Field } from "../Field/Field";
import { TYPES } from "../types";
import { CellSuperPoolInterface } from "./CellSuperPoolInterface";

export class CellSuperSpawnService {
    constructor(
        private cellsSuperPools: CellSuperPoolInterface,
        private cellVisualInstanceService: CellVisualInstanceService,
    ) {
    }

    createSuperCell(field: Field, column: number, row: number) {
        let prefab = this.cellsSuperPools.getAnyCellSuperPrefab()
        let cellSuper = this.cellVisualInstanceService.instantiate(prefab)

        let cell = field.getCellAt(column, row) as CellVisual
        cell.destroyCell()

        let cellVisual = cellSuper.getComponent(CellVisual)
        cellVisual.setCell(column, row)
        field.setCell(column, row, cellVisual)
    }
}

injected(CellSuperSpawnService, TYPES.cellSuperPool.optional, TYPES.cellVisualInstanceService.optional)