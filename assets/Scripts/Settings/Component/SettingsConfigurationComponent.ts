import { Component, Node, TERRAIN_HEIGHT_BASE, _decorator } from "cc";
import { container } from "../../container";
import { GameSpaceAccessInterface } from "../../Field/GameSpaceAccessInterface";
import { GameSpaceServiceInterface } from "../../Field/GameSpaceServiceInterface";
import { TYPES } from "../../types";
import { SettingsConfigurationInterface } from "../SettingsConfigurationInterface";
import { SettingsDataAccessComponent } from "./SettingDataAccessComponent";

const {ccclass, property} = _decorator

@ccclass
export class SettingsConfigurationComponent extends Component implements SettingsConfigurationInterface {
    @property(SettingsDataAccessComponent)
    settingsDataAccess: SettingsDataAccessComponent
    static id: number = 1
    myId: number = 0

    private gameSpaceAccess: GameSpaceAccessInterface
    private gameSpaceService: GameSpaceServiceInterface

    start() {
        container
            .bind(TYPES.settingsConfiguration)
            .toConstant(this)
        this.myId = SettingsConfigurationComponent.id++
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

    getBombRadius(): number {
        return this.settingsDataAccess.getSettingsData().bombRadius
    }
}