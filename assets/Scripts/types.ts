import { token } from "saloeater-brandi";
import { TestsPipeline } from "../Tests/TestsPipeline";

const TYPES = {
    testsPipeline: token<TestsPipeline>('testsPipeline'),
};

export { TYPES };