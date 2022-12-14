import { injected } from "saloeater-brandi";
import { BonusBurnCommand } from "../Bonus/BonusBurnCommand";
import { CellBurningServiceInterface } from "../BurnCells/CellBurningServiceInterface";
import { InputStateInterface } from "../CocosCreator/InputStateInterface";
import { Field } from "../Field/Field";
import { SettingsConfigurationInterface } from "../Settings/SettingsConfigurationInterface";
import { TYPES } from "../types";
import { BombCommandInterface } from "./BombCommandInterface";
import { CellsInRadiusInterface } from "./CellsInRadiusServiceInterface";

export class BombCommand extends BonusBurnCommand implements BombCommandInterface {
    constructor(
        private cellsInRadius: CellsInRadiusInterface,
        cellBurningService: CellBurningServiceInterface,
        inputState: InputStateInterface,
        private settingsConfiguration: SettingsConfigurationInterface,
    ) {
        super(cellBurningService, inputState)
    }

    execute(field: Field, column: number, row: number): void {
        if (!this.isInputOn()) {
            return;
        }

        let radius = this.settingsConfiguration.getBombRadius()
        
        let cells = this.cellsInRadius.findCellsInRadius(field, column, row, radius)
        this.burnCells(cells, field, column, row)
    }
}

injected(
    BombCommand,
    TYPES.cellsInRadius.optional,
    TYPES.cellBurningService.optional,
    TYPES.inputState.optional,
    TYPES.settingsConfiguration.optional,
)