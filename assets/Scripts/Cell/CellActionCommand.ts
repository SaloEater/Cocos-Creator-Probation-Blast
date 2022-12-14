import { injected } from "saloeater-brandi";
import { BombCommandInterface } from "../BonusBomb/BombCommandInterface";
import { SwapCommandInterface } from "../BonusSwap/SwapCommandInterface";
import { CellBurnCommandInterface } from "../BurnCells/CellBurnCommandInterface";
import { InputStateInterface } from "../CocosCreator/InputStateInterface";
import { FieldStorageInterface } from "../Field/FieldStorageInterface";
import { SettingsConfigurationInterface } from "../Settings/SettingsConfigurationInterface";
import { TYPES } from "../types";
import { CellActionCommandInterface } from "./CellActionCommandInterface";
import { CellActionState } from "./CellActionState";

export class CellActionCommand implements CellActionCommandInterface {
    constructor(
        private burnCommand: CellBurnCommandInterface,
        private cellActionState: CellActionState,
        private bombCommand: BombCommandInterface,
        private fieldStorage: FieldStorageInterface,
        private settingsConfiguration: SettingsConfigurationInterface,
        private swapCommand: SwapCommandInterface,
        private inputState: InputStateInterface,
    ) {
    }

    execute(column: number, row: number): void {
        if (!this.inputState.isOn()) {
            return;
        }

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
    TYPES.inputState.optional,
)