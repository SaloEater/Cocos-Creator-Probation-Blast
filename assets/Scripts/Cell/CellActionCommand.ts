import { injected } from "saloeater-brandi";
import { BombCommandInterface } from "../BonusBom/BombCommandInterface";
import { SwapCommandInterface } from "../BonusSwap/SwapCommandInterface";
import { CellBurnCommandInterface } from "../BurnCells/CellBurnCommandInterface";
import { FieldStorageInterface } from "../Field/FieldStorageInterface";
import { SettingsConfigurationInterface } from "../Settings/SettingsConfigurationInterface";
import { TYPES } from "../types";
import { CellActionCommandInterface } from "./CellActionCommandInterface";
import { CellActionState } from "./CellActionState";
import { CellInterface } from "./CellInterface";
import { CellVisual } from "./Component/CellVisual";

export class CellActionCommand implements CellActionCommandInterface {
    constructor(
        private burnCommand: CellBurnCommandInterface,
        private cellActionState: CellActionState,
        private bombCommand: BombCommandInterface,
        private fieldStorage: FieldStorageInterface,
        private settingsConfiguration: SettingsConfigurationInterface,
        private swapCommand: SwapCommandInterface,
    ) {
    }

    execute(column: number, row: number): void {
        if (this.cellActionState.isBomb()) {
            this.bombCommand.execute(
                this.fieldStorage.get(),
                column,
                row,
                this.settingsConfiguration.getBombRadius(),
            )
            return
        }

        if (this.cellActionState.isSwap()) {
            this.swapCommand.execute(
                this.fieldStorage.get(),
                column,
                row
            )
            return
        }

        this.burnCommand.execute(column, row)
    }
}

injected(
    CellActionCommand,
    TYPES.cellBurnCommand.optional,
    TYPES.cellActionState.optional,
    TYPES.bombCommand.optional,
    TYPES.fieldStorage.optional,
    TYPES.settingsConfiguration.optional,
    TYPES.swapCommand.optional,
)