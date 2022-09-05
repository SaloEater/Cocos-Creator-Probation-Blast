import { injected } from "saloeater-brandi";
import { SettingsConfigurationInterface } from "../Settings/SettingsConfigurationInterface";
import { TYPES } from "../types";
import { CellPositionCalculationsInterface } from "./CellPositionCalculationsInterface";

export class CellPositionCalculationsService implements CellPositionCalculationsInterface {
    constructor(private settingsConfiguration: SettingsConfigurationInterface) {
    }

    getYForRow(row: number): number {
        return - (this.settingsConfiguration.getCellHeight() * (row))
    }

    getXForColumn(column: number): number {
        return this.settingsConfiguration.getCellWidth() * column
    }
}

injected(CellPositionCalculationsService, TYPES.settingsConfiguration.optional)