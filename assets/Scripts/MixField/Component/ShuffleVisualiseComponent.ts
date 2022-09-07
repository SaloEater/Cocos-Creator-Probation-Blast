import { _decorator, Component, Label } from "cc";
import { container } from "../../container";
import { PointsStorageInterface } from "../../Points/PointsStorageInterface";
import { TYPES } from "../../types";

const {ccclass, property} = _decorator

@ccclass
export class ShuffleVisualiseComponent extends Component {
    shuffleStorage: PointsStorageInterface
    
    @property(Label)
    label: Label

    start() {
        this.shuffleStorage = container.get(TYPES.shufflesStorage)
    }

    update() {
        this.label.string = this.shuffleStorage.get().toString()
    }
}