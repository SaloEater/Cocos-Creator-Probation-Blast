import { injected } from "saloeater-brandi";
import { InputStateInterface } from "../CocosCreator/InputStateInterface";
import { FieldStorageInterface } from "../Field/FieldStorageInterface";
import { SettingsConfigurationInterface } from "../Settings/SettingsConfigurationInterface";
import { SquashFieldInterface } from "../SquashField/SquashFieldServiceInterface";
import { TYPES } from "../types";
import { CellBurnCommandInterface } from "./CellBurnCommandInterface";
import { CellBurningServiceInterface } from "./CellBurningServiceInterface";

export class CellBurnCommand implements CellBurnCommandInterface {
    constructor(
        private cellBurningService: CellBurningServiceInterface,
        private fieldStorage: FieldStorageInterface,
        private settingsConfiguration: SettingsConfigurationInterface,
    ) { 
    }

    execute(column: number, row: number): void {
        let field = this.fieldStorage.get()
        this.cellBurningService.burnCellsAt(
            field,
            column,
            row,
            this.settingsConfiguration.getMinBurnedAmount()
        )
    }
}

injected(
    CellBurnCommand,
    TYPES.cellBurningService.optional,
    TYPES.fieldStorage.optional,
    TYPES.settingsConfiguration.optional,
)