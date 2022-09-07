import { Component, _decorator } from "cc";
import { CellVisual } from "../Cell/Component/CellVisual";
import { container } from "../container";
import { Field } from "../Field/Field";
import { FieldStorageInterface } from "../Field/FieldStorageInterface";
import { FillFieldServiceInterface } from "../FillField/FillFieldServiceInterface";
import { PointsStorageInterface } from "../Points/PointsStorageInterface";
import { SettingsConfigurationInterface } from "../Settings/SettingsConfigurationInterface";
import { TYPES } from "../types";

const {ccclass} = _decorator

@ccclass
export class FakeStartComponent extends Component {
    private fillService: FillFieldServiceInterface
    private settingsConfiguration: SettingsConfigurationInterface
    private fieldStorage: FieldStorageInterface
    private shufflesStorage: PointsStorageInterface
    private turnsLeftStorage: PointsStorageInterface


    start() {
        this.settingsConfiguration = container.get(TYPES.settingsConfiguration)
        this.fillService = container.get(TYPES.fillFieldService)
        this.fieldStorage = container.get(TYPES.fieldStorage)
        this.shufflesStorage = container.get(TYPES.shufflesStorage)
        this.turnsLeftStorage = container.get(TYPES.turnsLeftStorage)

        let oldField = this.fieldStorage.get()
        if (oldField) {
            oldField.field.forEach(i => {
                i.cells.forEach(j => {
                    if (j instanceof CellVisual) {
                        j.destroyCell()
                    }
                })
            })
        }

        this.shufflesStorage.set(this.settingsConfiguration.getShufflesAmount())
        this.turnsLeftStorage.set(this.settingsConfiguration.getTurnsAmount())

        let field = new Field(
            this.settingsConfiguration.getRows(),
            this.settingsConfiguration.getColumns(),
        )
        this.fieldStorage.set(field)
        this.fillService.fill(field)
    }
}