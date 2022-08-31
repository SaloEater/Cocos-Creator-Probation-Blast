import { Component, find, Layout, TiledUserNodeData, _decorator } from "cc";
import { SettingsData } from "../DTO/SettingsData";
import { AbstractSettingComponent } from "./AbstractSettingComponent";
import { SettingsDataComponent } from "./DataTransfer/SettingsDataComponent";
import { MinBurnedAmountSettingComponent } from "./MinBurnedAmountSettingComponent";

const { ccclass, property } = _decorator

@ccclass
export class SaveSettingsComponent extends Component {
    @property(Layout)
    settingsPanel: Layout
    @property(SettingsDataComponent)
    settingDataComponent: SettingsDataComponent

    saveSettings() {
        this.settingsPanel.getComponentsInChildren(AbstractSettingComponent)
            .forEach((setting: AbstractSettingComponent) => {
                this.settingDataComponent.setSettingData(setting.applyValue(this.settingDataComponent.settingsData))
            })
    }
}