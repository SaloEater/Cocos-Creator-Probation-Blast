import { Component, EditBox, Label } from "cc";
import { SettingsData } from "../DTO/SettingsData";

export abstract class AbstractSettingComponent extends Component {
    settingDisplayName: string
    defaultValue: string

    onLoad() {
        this.node.getChildByName('Name').getComponent(Label).string = this.settingDisplayName
        this.getNodeEditBox().string = this.defaultValue
    }

    getRawValue(): string {
        return this.getNodeEditBox().string;
    }

    private getNodeEditBox() {
        return this.getComponentInChildren(EditBox);
    }

    abstract applyValue(data: SettingsData): SettingsData;
}