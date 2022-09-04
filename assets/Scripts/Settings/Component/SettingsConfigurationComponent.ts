import { _decorator } from "cc";
import { container } from "../../container";
import { GameSpaceAccessInterface } from "../../Field/GameSpaceAccessInterface";
import { GameSpaceServiceInterface } from "../../Field/GameSpaceServiceInterface";
import { TYPES } from "../../types";
import { SettingsConfigurationInterface } from "../SettingsConfigurationInterface";
import { SettingsDataAccessComponent } from "./SettingDataAccessComponent";

const {ccclass, property} = _decorator

@ccclass
export class SettingsConfigurationComponent
 implements SettingsConfigurationInterface
{
    @property(SettingsDataAccessComponent)
    settingsDataAccess: SettingsDataAccessComponent

    gameSpaceAccess: GameSpaceAccessInterface
    gameSpaceService: GameSpaceServiceInterface

    onLoad() {
        container
            .bind(TYPES.settingsConfiguration)
            .toConstant(this)
            
        this.gameSpaceAccess = container.get(TYPES.gameSpaceAccess)
        this.gameSpaceService = container.get(TYPES.gameSpaceService)
    }

    getRows(): number {
        return this.settingsDataAccess.getSettingsData().rows
    }

    getColumns(): number {
        return this.settingsDataAccess.getSettingsData().columns
    }

    getCellVariantsAmount(): number {
        return this.settingsDataAccess.getSettingsData().cellVariantsAmount
    }

    getMinBurnedAmount(): number {
        return this.settingsDataAccess.getSettingsData().minBurnedAmount
    }

    getShufflesAmount(): number {
        return this.settingsDataAccess.getSettingsData().shufflesAmount
    }

    getPointsToWin(): number {
        return this.settingsDataAccess.getSettingsData().pointsToWin
    }

    getTurnsAmount(): number {
        return this.settingsDataAccess.getSettingsData().turnsAmount
    }

    getSuperCellAppearenceAmount(): number {
        return this.settingsDataAccess.getSettingsData().superCellAppearenceAmount
    }

    getCellWidth(): number {
        const fieldWidth = this.gameSpaceService.getWidth(this.gameSpaceAccess.getGameSpace());
        return fieldWidth / this.getColumns()
    }
    
    getCellHeight(): number {
        const fieldHeight = this.gameSpaceService.getHeight(this.gameSpaceAccess.getGameSpace());
        return fieldHeight / this.getRows()
    }
}