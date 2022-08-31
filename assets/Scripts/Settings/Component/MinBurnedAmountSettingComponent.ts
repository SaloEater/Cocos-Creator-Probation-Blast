import { EditBox, _decorator } from "cc";
import { SettingsData } from "../DTO/SettingsData";
import { AbstractSettingComponent } from "./AbstractSettingComponent";

const { ccclass, executeInEditMode } = _decorator

@ccclass
@executeInEditMode(true)
export class MinBurnedAmountSettingComponent extends AbstractSettingComponent {
    onLoad() {
        this.settingDisplayName = 'Минимальное кол-во ячеек для сжигания'
        this.defaultValue = '2'
        super.onLoad()
    }
    applyValue(data: SettingsData): SettingsData {
        let value = parseInt(this.getRawValue())
        data.minBurnedAmount = value;

        return data;
    }
}