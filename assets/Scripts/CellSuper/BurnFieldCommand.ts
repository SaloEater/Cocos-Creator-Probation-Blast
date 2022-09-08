import { injected } from "saloeater-brandi";
import { BonusBurnCommand } from "../Bonus/BonusBurnCommand";
import { CellBurningServiceInterface } from "../BurnCells/CellBurningServiceInterface";
import { InputStateInterface } from "../CocosCreator/InputStateInterface";
import { Field } from "../Field/Field";
import { TYPES } from "../types";
import { CellSuperBurnCommand } from "./CellSuperBurnCommand";

export class BurnFieldCommand extends BonusBurnCommand {
    constructor(
        cellBurningService: CellBurningServiceInterface,
        inputState: InputStateInterface,
    ) {
        super(cellBurningService, inputState)
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

        this.burnCells(cells, field, column, row)
    }
}

injected(BurnFieldCommand, TYPES.cellBurningService.optional, TYPES.inputState.optional)