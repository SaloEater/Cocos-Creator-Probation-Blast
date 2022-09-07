import { Component, director, SceneAsset, _decorator } from "cc";
import { container } from "../../container";
import { TYPES } from "../../types";
import { GameSceneDirectorInterface } from "../GameSceneDirectorInterface";

const {ccclass, property} = _decorator

@ccclass
export class GameSceneDirector extends Component implements GameSceneDirectorInterface {
    @property(SceneAsset)
    winScene: SceneAsset

    @property(SceneAsset)
    loseScene: SceneAsset

    onLoad() {
        container
            .bind(TYPES.gameSceneDirector)
            .toConstant(this)
    }

    setWinScene(): void {
        this.changeScene(this.winScene)
    }

    setLoseScene(): void {
        this.changeScene(this.loseScene)
    }

    private changeScene(scene: SceneAsset): void {
        director.runScene(scene)
    }

}