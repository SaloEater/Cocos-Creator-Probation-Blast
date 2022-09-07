import {Component, director, SceneAsset, _decorator} from "cc"

const {ccclass, property} = _decorator

@ccclass
export class ChangeSceneComponent extends Component {
    @property(SceneAsset)
    gameScene: SceneAsset

    changeScene() {
        director.loadScene(this.gameScene.name);
        director.runScene(this.gameScene)
    }
}