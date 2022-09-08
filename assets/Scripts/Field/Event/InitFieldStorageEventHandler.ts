import { injected } from "saloeater-brandi";
import { EventHandlerInterface } from "../../Event/EventHandlerInterface";
import { PointsStorageInterface } from "../../Points/PointsStorageInterface";
import { SettingsConfigurationInterface } from "../../Settings/SettingsConfigurationInterface";
import { TYPES } from "../../types";
import { Field } from "../Field";
import { FieldStorageInterface } from "../FieldStorageInterface";

export class InitFieldStorageEventHandler implements EventHandlerInterface {
    constructor(
        private settingsConfiguration: SettingsConfigurationInterface,
        private fieldStorage: FieldStorageInterface,
    ) {
    }

    handle() {
        let field = new Field(
            this.settingsConfiguration.getRows(),
            this.settingsConfiguration.getColumns(),
        )
        this.fieldStorage.set(field)
    }
}

injected(InitFieldStorageEventHandler, TYPES.settingsConfiguration.optional, TYPES.fieldStorage.optional)
