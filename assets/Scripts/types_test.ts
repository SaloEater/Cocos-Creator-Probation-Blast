import { token } from "saloeater-brandi";
import { CellBurningService } from "./BurnCells/CellBurningService";
import { SimilarCellsService } from "./SimilarCells/SimilarCellsService";
import { SquashFieldService } from "./SquashField/SquashFieldService";

const TEST_TYPES = {
    squashFieldService: token<SquashFieldService>('squashFieldService'),
    similarCellsService: token<SimilarCellsService>('similarCellsService'),
    cellBurningService: token<CellBurningService>('cellBurningService')
};

export { TEST_TYPES };