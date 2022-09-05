import { container } from "../container";
import { GameSpaceAccessInterface } from "../Field/GameSpaceAccessInterface";
import { GameSpaceServiceInterface } from "../Field/GameSpaceServiceInterface";
import { SettingsConfigurationInterface } from "../Settings/SettingsConfigurationInterface";
import { TYPES } from "../types";
import { CellPositionCalculationsInterface } from "./CellPositionCalculationsInterface";

export class CellPositionCalculationsService implements CellPositionCalculationsInterface {
    protected settingsConfiguration: SettingsConfigurationInterface

    constructor() {
        this.settingsConfiguration = container.get(TYPES.settingsConfiguration)
    }

    getYForRow(row: number): number {
        return - (this.settingsConfiguration.getCellHeight() * (row))
    }

    getXForColumn(column: number): number {
        return this.settingsConfiguration.getCellWidth() * column
    }

}