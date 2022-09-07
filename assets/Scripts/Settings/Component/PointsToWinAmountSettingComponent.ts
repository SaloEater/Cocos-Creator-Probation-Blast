import { _decorator } from "cc";
import { SettingsData } from "../DTO/SettingsData";
import { AbstractSettingComponent } from "./AbstractSettingComponent";

const { ccclass, executeInEditMode } = _decorator

@ccclass
@executeInEditMode(true)
export class PointsToWinAmountSettingComponent extends AbstractSettingComponent {
    onLoad() {
        this.settingDisplayName = 'Очков для победы'
        this.defaultValue = '10'
        super.onLoad()
    }

    applyValue(data: SettingsData): SettingsData {
        let value = parseInt(this.getRawValue())
        data.pointsToWin = value;

        return data;
    }
}