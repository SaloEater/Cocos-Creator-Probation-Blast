import {Asset, Component, director, game, Scene, SceneAsset, _decorator, Node} from "cc"
import { SettingsDataComponent } from "./DataTransfer/SettingsDataComponent"

const {ccclass, property} = _decorator

@ccclass
export class SettingsSceneComponent extends Component {
    @property(SceneAsset)
    gameScene: SceneAsset

    settingsData: Node

    onLoad() {
        this.settingsData = this.node.parent.getComponentInChildren(SettingsDataComponent).node
    }

    changeScene() {
        director.addPersistRootNode(this.settingsData)
        //director.loadScene(this.gameScene.name);
        director.runScene(this.gameScene)
    }
}