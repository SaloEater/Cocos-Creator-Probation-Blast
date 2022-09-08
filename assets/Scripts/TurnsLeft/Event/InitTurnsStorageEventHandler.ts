import { injected } from "saloeater-brandi";
import { EventHandlerInterface } from "../../Event/EventHandlerInterface";
import { PointsStorageInterface } from "../../Points/PointsStorageInterface";
import { SettingsConfigurationInterface } from "../../Settings/SettingsConfigurationInterface";
import { TYPES } from "../../types";

export class InitTurnsStorageEventHandler implements EventHandlerInterface {
    constructor(
        private settingsConfiguration: SettingsConfigurationInterface,
        private turnsStorage: PointsStorageInterface,
    ) {
    }

    handle() {
        this.turnsStorage.set(this.settingsConfiguration.getTurnsAmount())
    }
}

injected(InitTurnsStorageEventHandler, TYPES.settingsConfiguration.optional, TYPES.turnsLeftStorage.optional)
