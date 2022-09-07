import { injected } from "saloeater-brandi";
import { CellBurningServiceInterface } from "../BurnCells/CellBurningServiceInterface";
import { InputStateInterface } from "../CocosCreator/InputStateInterface";
import { Field } from "../Field/Field";
import { TYPES } from "../types";
import { CellSuperBurnCommand } from "./CellSuperBurnCommand";
import { SameColumnCellsService } from "./SameColumnCellsService";

export class BurnColumnCommand extends CellSuperBurnCommand {
    constructor(
        private sameColumnCellsService: SameColumnCellsService,
        private cellBurningService: CellBurningServiceInterface,
        inputState: InputStateInterface,
    ) {
        super(inputState)
    }

    execute(field: Field, column: number, row: number) {
        if (!this.isInputOn()) {
            return;
        }

        let cells = this.sameColumnCellsService.findCellsOnSameRow(field, column, row)
        this.emitEvent(cells.length, field, column, row)
        let originCell = field.getCellAt(column, row)
        cells.forEach(i => this.cellBurningService.burnCell(field, i, originCell))
    }
}

injected(
    BurnColumnCommand,
    TYPES.sameColumnCellsService.optional,
    TYPES.cellBurningService.optional,
    TYPES.inputState.optional,
)