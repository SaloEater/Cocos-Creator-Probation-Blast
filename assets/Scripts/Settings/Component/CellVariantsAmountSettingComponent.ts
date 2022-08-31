import { EditBox, _decorator } from "cc";
import { SettingsData } from "../DTO/SettingsData";
import { AbstractSettingComponent } from "./AbstractSettingComponent";

const { ccclass, executeInEditMode } = _decorator

@ccclass
@executeInEditMode(true)
export class CellVariantsAmountSettingComponent extends AbstractSettingComponent {
    onLoad() {
        this.settingDisplayName = 'Кол-во вариаций ячеек'
        this.defaultValue = '9'
        super.onLoad()
    }

    applyValue(data: SettingsData): SettingsData {
        let value = parseInt(this.getRawValue())
        data.cellVariantsAmount = value;

        return data;
    }
}