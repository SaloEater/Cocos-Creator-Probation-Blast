import { injected } from "saloeater-brandi";
import { EventHandlerInterface } from "../../Event/EventHandlerInterface";
import { PointsStorageInterface } from "../../Points/PointsStorageInterface";
import { SettingsConfigurationInterface } from "../../Settings/SettingsConfigurationInterface";
import { TYPES } from "../../types";

export class InitShuffleStorageEventHandler implements EventHandlerInterface {
    constructor(
        private settingsConfiguration: SettingsConfigurationInterface,
        private shufflesStorage: PointsStorageInterface,
    ) {
    }

    handle() {
        this.shufflesStorage.set(this.settingsConfiguration.getShufflesAmount())
    }
}

injected(InitShuffleStorageEventHandler, TYPES.settingsConfiguration.optional, TYPES.shufflesStorage.optional)
