import { CellPositionCalculationsService } from "../../Scripts/Cell/CellPositionCalculationsService";
import { container } from "../../Scripts/container";
import { TYPES } from "../../Scripts/types";
import { TEST_TYPES } from "../../Scripts/types_test";
import Assert from "../Assert";
import { CellPositionCalculationsMockService } from "../Mock/CellPositionCalculationsMockService";
import { SettingsConfigurationMockService } from "../Mock/SettingsConfigurationMockService";

export class CellPositionCalculationsServiceTest {
    service:  CellPositionCalculationsService

    constructor() {
        let settingsConfiguration = new SettingsConfigurationMockService()
        container.bind(TEST_TYPES.testsSettingsConfiguration).toConstant(settingsConfiguration)
        container
            .bind(TEST_TYPES.testsCellPositionCalculations)
            .toInstance(CellPositionCalculationsMockService)
            .inContainerScope()
        this.service = container.get(TEST_TYPES.testsCellPositionCalculations)
    }

    testGetYForRow(): void {
        let rows = [
            [0, 0],
            [1, -1],
            [5, -5],
        ]

        rows.forEach(i => {
            let actual = this.service.getYForRow(i[0])
            Assert.assertEquals(i[1], actual)
        })
    }

    testGetXForColumn(): void {
        let columns = [
            [0, 0],
            [1, 1],
            [5, 5],
        ]

        columns.forEach(i => {
            let actual = this.service.getXForColumn(i[0])
            Assert.assertEquals(i[1], actual)
        })
    }
}