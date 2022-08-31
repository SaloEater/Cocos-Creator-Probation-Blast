import {Asset, Component, director, Scene, SceneAsset, _decorator} from "cc"

const {ccclass, property} = _decorator

@ccclass
export class SettingsSceneComponent extends Component {
    @property(SceneAsset)
    gameScene: SceneAsset

    changeScene() {
        director.loadScene(this.gameScene.name);
        director.runScene(this.gameScene)
    }
}