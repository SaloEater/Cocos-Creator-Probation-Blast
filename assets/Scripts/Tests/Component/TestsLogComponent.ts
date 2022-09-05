import { injected } from "saloeater-brandi";
import { Component, _decorator } from "cc";
import { TestsPipeline } from "../../../Tests/TestsPipeline";
import { container } from "../../container";
import { TYPES } from "../../types";
import { TEST_TYPES } from "../../types_test";

const {ccclass} = _decorator

@ccclass
export class TestsLogComponent extends Component {
    private _pipeline: TestsPipeline

    onLoad() {
        this._pipeline = container.get(TYPES.testsPipeline)
        this.runTests()
    }

    runTests() {
        this._pipeline.run()
    }
}