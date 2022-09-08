import { injected } from "saloeater-brandi";
import { BonusBurnCommand } from "../Bonus/BonusBurnCommand";
import { CellBurningServiceInterface } from "../BurnCells/CellBurningServiceInterface";
import { InputStateInterface } from "../CocosCreator/InputStateInterface";
import { Field } from "../Field/Field";
import { TYPES } from "../types";
import { SameRowCellsService } from "./SameRowCellsService";

export class BurnRowCommand extends BonusBurnCommand {
    constructor(
        private sameRowCellsService: SameRowCellsService,
        cellBurningService: CellBurningServiceInterface,
        inputState: InputStateInterface,
    ) {
        super(cellBurningService, inputState)
    }

    execute(field: Field, column: number, row: number) {
        if (!this.isInputOn()) {
            return;
        }
        
        let cells = this.sameRowCellsService.findCellsOnSameRow(field, column, row)
        this.burnCells(cells, field, column, row)
    }
}

injected(
    BurnRowCommand,
    TYPES.sameRowCellsService.optional,
    TYPES.cellBurningService.optional,
    TYPES.inputState.optional
)