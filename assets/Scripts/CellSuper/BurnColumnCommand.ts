import { injected } from "saloeater-brandi";
import { BonusBurnCommand } from "../Bonus/BonusBurnCommand";
import { CellBurningServiceInterface } from "../BurnCells/CellBurningServiceInterface";
import { InputStateInterface } from "../CocosCreator/InputStateInterface";
import { Field } from "../Field/Field";
import { TYPES } from "../types";
import { SameColumnCellsService } from "./SameColumnCellsService";

export class BurnColumnCommand extends BonusBurnCommand {
    constructor(
        private sameColumnCellsService: SameColumnCellsService,
        cellBurningService: CellBurningServiceInterface,
        inputState: InputStateInterface,
    ) {
        super(cellBurningService, inputState)
    }

    execute(field: Field, column: number, row: number) {
        if (!this.isInputOn()) {
            return;
        }

        let cells = this.sameColumnCellsService.findCellsOnSameColumn(field, column, row)
        this.burnCells(cells, field, column, row)
    }
}

injected(
    BurnColumnCommand,
    TYPES.sameColumnCellsService.optional,
    TYPES.cellBurningService.optional,
    TYPES.inputState.optional,
)