import { Component, Layout, _decorator } from "cc";
import { AbstractSettingComponent } from "./AbstractSettingComponent";
import { SettingsDataComponent } from "./DataTransfer/SettingsDataComponent";

const { ccclass, property } = _decorator

@ccclass
export class SaveSettingsComponent extends Component {
    @property(Layout)
    settingsPanel: Layout
    @property(SettingsDataComponent)
    settingDataComponent: SettingsDataComponent

    saveSettings() {
        this.settingsPanel.getComponentsInChildren(AbstractSettingComponent).forEach((
            setting: AbstractSettingComponent) => {
                this.settingDataComponent.setSettingData(setting.applyValue(this.settingDataComponent.settingsData))
            }
        )
    }
}