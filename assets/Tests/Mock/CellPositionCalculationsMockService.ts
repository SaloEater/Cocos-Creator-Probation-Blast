import { injected } from "saloeater-brandi";
import { CellPositionCalculationsService } from "../../Scripts/Cell/CellPositionCalculationsService";
import { TEST_TYPES } from "../../Scripts/types_test";

export class CellPositionCalculationsMockService extends CellPositionCalculationsService {
}

injected(CellPositionCalculationsMockService, TEST_TYPES.testsSettingsConfiguration.optional)