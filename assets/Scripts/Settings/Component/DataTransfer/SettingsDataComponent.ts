import { Component, _decorator } from "cc";
import { SettingsData } from "../../DTO/SettingsData"

const {ccclass} = _decorator

@ccclass
export class SettingsDataComponent extends Component {
    settingsData: SettingsData

    onLoad() {
        this.settingsData = new SettingsData()
    }

    setSettingData(data: SettingsData): void {
        this.settingsData = data
    }
}