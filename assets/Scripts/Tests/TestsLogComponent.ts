import { Component, _decorator } from "cc";
import { TestsPipeline } from "../../Tests/TestsPipeline";

const {ccclass} = _decorator

@ccclass
export class TestsLogComponent extends Component {

    onLoad() {
        this.runTests()
    }

    runTests() {
        let pipeline = new TestsPipeline()
        pipeline.run()
    }
}