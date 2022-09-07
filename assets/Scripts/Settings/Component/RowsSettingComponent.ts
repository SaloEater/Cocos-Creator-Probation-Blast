import { EditBox, _decorator } from "cc";
import { SettingsData } from "../DTO/SettingsData";
import { AbstractSettingComponent } from "./AbstractSettingComponent";

const { ccclass, executeInEditMode } = _decorator

@ccclass
@executeInEditMode(true)
export class RowsSettingComponent extends AbstractSettingComponent {
    
    onLoad() {
        this.settingDisplayName = 'Кол-во рядов'
        this.defaultValue = '5'
        super.onLoad()
    }

    applyValue(data: SettingsData): SettingsData {
        let value = parseInt(this.getRawValue())
        data.rows = value;

        return data;
    }
}