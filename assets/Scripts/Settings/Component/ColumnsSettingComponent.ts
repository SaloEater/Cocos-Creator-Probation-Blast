import { EditBox, _decorator } from "cc";
import { SettingsData } from "../DTO/SettingsData";
import { AbstractSettingComponent } from "./AbstractSettingComponent";

const { ccclass, executeInEditMode } = _decorator

@ccclass
@executeInEditMode(true)
export class ColumnsSettingComponent extends AbstractSettingComponent {
    onLoad() {
        this.settingDisplayName = 'Кол-во колонок'
        this.defaultValue = '1'
        super.onLoad()
    }

    applyValue(data: SettingsData): SettingsData {
        let value = parseInt(this.getRawValue())
        data.columns = value;

        return data;
    }
}