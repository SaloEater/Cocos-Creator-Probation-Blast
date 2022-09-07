import { _decorator } from "cc";
import { SettingsData } from "../DTO/SettingsData";
import { AbstractSettingComponent } from "./AbstractSettingComponent";

const { ccclass, executeInEditMode } = _decorator

@ccclass
@executeInEditMode(true)
export class TurnsAmountSettingComponent extends AbstractSettingComponent {
    onLoad() {
        this.settingDisplayName = 'Кол-во ходов'
        this.defaultValue = '5'
        super.onLoad()
    }

    applyValue(data: SettingsData): SettingsData {
        let value = parseInt(this.getRawValue())
        data.turnsAmount = value;

        return data;
    }
}