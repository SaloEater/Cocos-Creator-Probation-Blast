import { _decorator, Component, Label } from "cc";
import { container } from "../../container";
import { PointsStorageInterface } from "../../Points/PointsStorageInterface";
import { TYPES } from "../../types";

const {ccclass, property} = _decorator

@ccclass
export class TurnsLeftVisualiseComponent extends Component {
    turnsLeftStorage: PointsStorageInterface
    
    @property(Label)
    label: Label

    start() {
        this.turnsLeftStorage = container.get(TYPES.turnsLeftStorage)
    }

    update() {
        this.label.string = this.turnsLeftStorage.get().toString()
    }
}