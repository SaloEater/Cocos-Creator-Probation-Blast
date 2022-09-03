import { token } from "saloeater-brandi";
import { SimilarCellsService } from "./SimilarCells/SimilarCellsService";
import { SquashFieldService } from "./SquashField/SquashFieldService";

const TEST_TYPES = {
    squashFieldService: token<SquashFieldService>('squashFieldService'),
    similarCellsService: token<SimilarCellsService>('similarCellsService'),
};

export { TEST_TYPES };