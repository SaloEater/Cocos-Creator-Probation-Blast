import { _decorator, Component, Label } from "cc";
import { container } from "../../container";
import { TYPES } from "../../types";
import { PointsStorageInterface } from "../PointsStorageInterface";

const {ccclass, property} = _decorator

@ccclass
export class PointsVisualiseComponent extends Component {
    pointsStorage: PointsStorageInterface
    
    @property(Label)
    label: Label

    start() {
        this.pointsStorage = container.get(TYPES.pointsStorage)
    }

    update() {
        this.label.string = this.pointsStorage.get().toString()
    }
}