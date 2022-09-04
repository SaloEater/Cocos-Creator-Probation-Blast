import { container } from "../container";
import { GameSpaceAccessInterface } from "../Field/GameSpaceAccessInterface";
import { GameSpaceServiceInterface } from "../Field/GameSpaceServiceInterface";
import { SettingsConfigurationInterface } from "../Settings/SettingsConfigurationInterface";
import { TYPES } from "../types";
import { CellPositionCalculationsInterface } from "./CellPositionCalculationsInterface";

export class CellPositionCalculationsService implements CellPositionCalculationsInterface {
    private gameSpaceAccess: GameSpaceAccessInterface
    private gameSpaceService: GameSpaceServiceInterface
    private settingsConfiguration: SettingsConfigurationInterface

    constructor() {
        this.gameSpaceAccess = container.get(TYPES.gameSpaceAccess)
        this.gameSpaceService = container.get(TYPES.gameSpaceService)
        this.settingsConfiguration = container.get(TYPES.settingsConfiguration)
    }

    getYForRow(row: number): number {
        return - (this.settingsConfiguration.getCellHeight() * (this.settingsConfiguration.getRows() - row - 1))
    }

    getXForColumn(column: number): number {
        return this.settingsConfiguration.getCellWidth() * column
    }

}