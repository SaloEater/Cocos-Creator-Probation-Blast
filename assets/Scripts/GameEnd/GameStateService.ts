import { injected } from "saloeater-brandi";
import { PointsStorageInterface } from "../Points/PointsStorageInterface";
import { SettingsConfigurationInterface } from "../Settings/SettingsConfigurationInterface";
import { TYPES } from "../types";
import { GameStateInterface } from "./GameStateInterface";

export class GameStateService implements GameStateInterface {    
    constructor(
        private shufflesStorage: PointsStorageInterface,
        private pointsStorage: PointsStorageInterface,
        private turnsLeftStorage: PointsStorageInterface,
        private settingsConfiguration: SettingsConfigurationInterface,
    ) {
    }
    isGameWon(): boolean {
        return this.pointsStorage.get() >= this.settingsConfiguration.getPointsToWin()
    }

    isGameLost(): boolean {
        return this.shufflesStorage.get() <= 0
            || this.turnsLeftStorage.get() <= 0
    }
}

injected(
    GameStateService,
    TYPES.shufflesStorage.optional,
    TYPES.pointsStorage.optional,
    TYPES.turnsLeftStorage.optional,
    TYPES.settingsConfiguration.optional
)