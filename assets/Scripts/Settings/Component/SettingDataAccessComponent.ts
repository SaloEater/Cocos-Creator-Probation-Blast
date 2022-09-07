import {Asset, Component, director, game, Scene, SceneAsset, _decorator, Node, find} from "cc"
import { SettingsData } from "../DTO/SettingsData"
import { SettingsDataComponent } from "./DataTransfer/SettingsDataComponent"

const {ccclass, property} = _decorator

@ccclass
export class SettingsDataAccessComponent extends Component {
    @property(Node)
    rootNode: Node

    private settingsData: SettingsData

    onLoad() {
        let component = this.rootNode.getComponentInChildren(SettingsDataComponent)
        this.settingsData = component.settingsData
    }

    getSettingsData(): SettingsData {
        return this.settingsData
    }
}