import { token } from "saloeater-brandi";
import { TestsPipeline } from "../Tests/TestsPipeline";
import { SimilarCellsServiceInterface } from "./SimilarCells/SimilarCellsServiceInterface";

const TYPES = {
    testsPipeline: token<TestsPipeline>('testsPipeline'),
    similarCellsService: token<SimilarCellsServiceInterface>('similarCellsService')
};

export { TYPES };