import { injected } from "saloeater-brandi";
import { CellBurningServiceInterface } from "../BurnCells/CellBurningServiceInterface";
import { InputStateInterface } from "../CocosCreator/InputStateInterface";
import { Field } from "../Field/Field";
import { TYPES } from "../types";
import { CellSuperBurnCommand } from "./CellSuperBurnCommand";
import { SameRowCellsService } from "./SameRowCellsService";

export class BurnRowCommand extends CellSuperBurnCommand {
    constructor(
        private sameRowCellsService: SameRowCellsService,
        private cellBurningService: CellBurningServiceInterface,
        inputState: InputStateInterface,
    ) {
        super(inputState)
    }

    execute(field: Field, column: number, row: number) {
        if (!this.isInputOn()) {
            return;
        }
        
        let cells = this.sameRowCellsService.findCellsOnSameRow(field, column, row)
        this.emitEvent(cells.length, field, column, row)
        let originCell = field.getCellAt(column, row)
        cells.forEach(i => this.cellBurningService.burnCell(field, i, originCell))
    }
}

injected(
    BurnRowCommand,
    TYPES.sameRowCellsService.optional,
    TYPES.cellBurningService.optional,
    TYPES.inputState.optional
)