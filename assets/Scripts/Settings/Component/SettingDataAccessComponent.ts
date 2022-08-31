import {Asset, Component, director, game, Scene, SceneAsset, _decorator, Node, find} from "cc"
import { SettingsData } from "../DTO/SettingsData"
import { SettingsDataComponent } from "./DataTransfer/SettingsDataComponent"

const {ccclass, property} = _decorator

@ccclass
export class SettingsDataAccessComponent extends Component {
    @property(Node)
    rootNode: Node

    settingsDataComponent: SettingsDataComponent

    onLoad() {
        this.settingsDataComponent = this.rootNode.getComponentInChildren(SettingsDataComponent)
    }

    getSettingsData(): SettingsData {
        return this.settingsDataComponent.settingsData
    }
}