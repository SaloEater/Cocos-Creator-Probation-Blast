import { token } from "saloeater-brandi";
import { CellBurningService } from "./BurnCells/CellBurningService";
import { FillFieldService } from "./FillField/FillFieldService";
import { SimilarCellsService } from "./SimilarCells/SimilarCellsService";
import { SquashFieldService } from "./SquashField/SquashFieldService";

const TEST_TYPES = {
    testsSquashFieldService: token<SquashFieldService>('testsSquashFieldService'),
    testsSimilarCellsService: token<SimilarCellsService>('testsSimilarCellsService'),
    testsCellBurningService: token<CellBurningService>('testsCellBurningService'),
    testsFillFieldService: token<FillFieldService>('testsFillFieldService'),
};

export { TEST_TYPES };