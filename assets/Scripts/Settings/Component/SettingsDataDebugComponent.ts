import { Component, _decorator } from "cc"
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