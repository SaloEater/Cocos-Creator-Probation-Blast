import { injected } from "saloeater-brandi";
import { CellBurningService } from "../../Scripts/BurnCells/CellBurningService";
import { TEST_TYPES } from "../../Scripts/types_test";

export class CellBurningMockService extends CellBurningService {
    protected emitEvent(length: number): void {
        return;
    }
}

injected(CellBurningMockService, TEST_TYPES.testsSimilarCellsService.optional)