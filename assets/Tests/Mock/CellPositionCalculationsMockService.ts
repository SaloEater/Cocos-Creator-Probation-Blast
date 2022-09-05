import { CellPositionCalculationsService } from "../../Scripts/Cell/CellPositionCalculationsService";
import { container } from "../../Scripts/container";
import { TYPES } from "../../Scripts/types";
import { TEST_TYPES } from "../../Scripts/types_test";
import { SettingsConfigurationMockService } from "./SettingsConfigurationMockService";

export class CellPositionCalculationsMockService extends CellPositionCalculationsService {
    constructor() {
        super()
        this.settingsConfiguration = container.get(TEST_TYPES.testsSettingsConfiguration)
    }
}