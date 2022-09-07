import { injected } from "saloeater-brandi";
import { CellBurningServiceInterface } from "../BurnCells/CellBurningServiceInterface";
import { InputStateInterface } from "../CocosCreator/InputStateInterface";
import { Field } from "../Field/Field";
import { TYPES } from "../types";
import { CellSuperBurnCommand } from "./CellSuperBurnCommand";

export class BurnFieldCommand extends CellSuperBurnCommand {
    constructor(
        private cellBurningService: CellBurningServiceInterface,
        inputState: InputStateInterface,
    ) {
        super(inputState)
    }

    execute(field: Field, column: number, row: number) {
        if (!this.isInputOn()) {
            return;
        }
        let cells = []

        for (let column of field.field.values()) {
            for (let cell of column.cells.values()) {
                cells.push(cell)
            }
        }

        this.emitEvent(cells.length, field, column, row)
        let originCell = field.getCellAt(column, row)
        cells.forEach(i => this.cellBurningService.burnCell(field, i, originCell))
    }
}

injected(BurnFieldCommand, TYPES.cellBurningService.optional, TYPES.inputState.optional)