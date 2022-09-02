import { injected } from "saloeater-brandi";
import { Component, _decorator } from "cc";
import { container } from "../container";
import { TestsPipeline } from "../../Tests/TestsPipeline";
import { TYPES } from "../types";

const {ccclass} = _decorator

@ccclass
export class TestsLogComponent extends Component {
    _pipeline: TestsPipeline

    constructor() {
        super()
        this._pipeline = container.get(TYPES.testsPipeline)
    }

    onLoad() {
        this.runTests()
    }

    runTests() {
        this._pipeline.run()
    }
}