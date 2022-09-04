import { Component, _decorator } from "cc";
import { container } from "../container";
import { Field } from "../Field/Field";
import { FieldStorageInterface } from "../Field/FieldStorageInterface";
import { FillFieldServiceInterface } from "../FillField/FillFieldServiceInterface";
import { SettingsConfigurationInterface } from "../Settings/SettingsConfigurationInterface";
import { TYPES } from "../types";

const {ccclass} = _decorator

@ccclass
export class FakeStartComponent extends Component {
    private fillService: FillFieldServiceInterface
    private settingsConfiguration: SettingsConfigurationInterface
    private fieldStorage: FieldStorageInterface

    fakeStart() {
        this.fillService = container.get(TYPES.fillFieldService)
        this.settingsConfiguration = container.get(TYPES.settingsConfiguration)
        this.fieldStorage = container.get(TYPES.fieldStorage)

        let field = new Field(
            this.settingsConfiguration.getRows(),
            this.settingsConfiguration.getColumns(),
        )
        this.fieldStorage.set(field)
        this.fillService.fill(field)
    }
}