import { _decorator, Component } from "cc";
import { container } from "../container";
import { TYPES } from "../types";

const {ccclass} = _decorator

@ccclass
export class InitContainerComponent extends Component {
    onLoad() {
        container.get(TYPES.testsPipeline)
    }
}