import {Asset, Component, director, game, Scene, SceneAsset, _decorator, Node} from "cc"

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