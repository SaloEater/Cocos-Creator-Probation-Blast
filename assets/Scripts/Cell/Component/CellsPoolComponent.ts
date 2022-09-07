import { Component, Prefab, _decorator } from "cc";
import { container } from "../../container";
import { Random } from "../../Random/Random";
import { SettingsConfigurationInterface } from "../../Settings/SettingsConfigurationInterface";
import { TYPES } from "../../types";
import { CellsPoolInterface } from "../CellsPoolInterface";

const {ccclass, property} = _decorator

@ccclass
export class CellsPoolComponent extends Component implements CellsPoolInterface {
    @property([Prefab])
    cells: Prefab[] = []
    
    settingsConfiguration: SettingsConfigurationInterface

    onLoad() {
        container
            .bind(TYPES.cellsPool)
            .toConstant(this)
    }

    start() {
        this.settingsConfiguration = container.get(TYPES.settingsConfiguration) 
    }

    getAnyCellPrefab(): Prefab {
        return this.cells[Random.between(
            0, 
            Math.min(this.cells.length - 1, this.settingsConfiguration.getCellVariantsAmount())
        )]
    }
}