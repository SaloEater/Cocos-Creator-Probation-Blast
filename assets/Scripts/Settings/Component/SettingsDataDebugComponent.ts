import {Asset, Component, director, game, Scene, SceneAsset, _decorator, Node, find} from "cc"
import { SettingsDataComponent } from "./DataTransfer/SettingsDataComponent"
import { SettingsDataAccessComponent } from "./SettingDataAccessComponent"

const {ccclass, property} = _decorator

@ccclass
export class SettingsDataDebugComponent extends Component {
    @property(SettingsDataAccessComponent)
    settingsDataAccessComponent: SettingsDataAccessComponent

    printLog() {
        console.log(this.settingsDataAccessComponent.getSettingsData())
    }
}