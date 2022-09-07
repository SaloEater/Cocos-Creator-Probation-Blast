import { _decorator } from "cc";
import { SettingsData } from "../DTO/SettingsData";
import { AbstractSettingComponent } from "./AbstractSettingComponent";

const { ccclass, executeInEditMode } = _decorator

@ccclass
@executeInEditMode(true)
export class BombRadiusSettingComponent extends AbstractSettingComponent {
    onLoad() {
        this.settingDisplayName = 'Радиус бомбы'
        this.defaultValue = '2'
        super.onLoad()
    }

    applyValue(data: SettingsData): SettingsData {
        let value = parseInt(this.getRawValue())
        data.bombRadius = value;

        return data;
    }
}