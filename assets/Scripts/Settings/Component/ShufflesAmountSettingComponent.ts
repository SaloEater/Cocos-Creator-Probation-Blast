import { _decorator } from "cc";
import { SettingsData } from "../DTO/SettingsData";
import { AbstractSettingComponent } from "./AbstractSettingComponent";

const { ccclass, executeInEditMode } = _decorator

@ccclass
@executeInEditMode(true)
export class ShufflesAmountSettingComponent extends AbstractSettingComponent {
    onLoad() {
        this.settingDisplayName = 'Кол-во перемешиваний'
        this.defaultValue = '5'
        super.onLoad()
    }

    applyValue(data: SettingsData): SettingsData {
        let value = parseInt(this.getRawValue())
        data.shufflesAmount = value;

        return data;
    }
}