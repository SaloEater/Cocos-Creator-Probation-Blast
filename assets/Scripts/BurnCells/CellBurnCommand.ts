import { container } from "../container";
import { FieldStorageInterface } from "../Field/FieldStorageInterface";
import { SettingsConfigurationInterface } from "../Settings/SettingsConfigurationInterface";
import { SquashFieldInterface } from "../SquashField/SquashFieldServiceInterface";
import { TYPES } from "../types";
import { CellBurnCommandInterface } from "./CellBurnCommandInterface";
import { CellBurningServiceInterface } from "./CellBurningServiceInterface";

export class CellBurnCommand implements CellBurnCommandInterface {
    cellBurningService: CellBurningServiceInterface
    fieldStorage: FieldStorageInterface
    squashService: SquashFieldInterface
    settingsConfiguration: SettingsConfigurationInterface

    constructor() {
        this.cellBurningService = container.get(TYPES.cellBurningService)
        this.fieldStorage = container.get(TYPES.fieldStorage)
        this.squashService = container.get(TYPES.squashService)
        this.settingsConfiguration = container.get(TYPES.settingsConfiguration)
    }

    execute(column: number, row: number): void {
        let field = this.fieldStorage.get()
        this.cellBurningService.burnCellAt(
            field,
            column,
            row,
            this.settingsConfiguration.getMinBurnedAmount()
        )
        this.squashService.squash(field)
    }
}