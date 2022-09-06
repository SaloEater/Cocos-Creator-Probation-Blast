import { container } from "../../Scripts/container";
import { Field } from "../../Scripts/Field/Field";
import { PlayableFieldMockService } from "../../Scripts/PlayableField/PlayableFieldMockService";
import { PlayableFieldService } from "../../Scripts/PlayableField/PlayableFieldService";
import { fillFieldByMap } from "../../Scripts/Tests/FieldTestHelper";
import { TEST_TYPES } from "../../Scripts/types_test";
import Assert from "../Assert";
import { CellTest } from "../Mock/CellTest";
import { SettingsConfigurationMockService } from "../Mock/SettingsConfigurationMockService";

export class PlayableFieldServiceTest {
    service: PlayableFieldService

    constructor() {
        container
            .bind(TEST_TYPES.testsPlayableField)
            .toInstance(PlayableFieldMockService)
            .inContainerScope()

        this.service = container.get(TEST_TYPES.testsPlayableField)
    }

    /**
     * . + .
     * + + +
     * . + .
     */
    testSolutionExists() {
        let field = new Field(3, 3)
        let simpleCellMap = [
            [1, 0],
            [1, 1],
            [1, 2],
            [0, 1],
            [2, 1],
        ]
        fillFieldByMap(simpleCellMap, field);

        let actual = this.service.isSolutionExists(field)

        Assert.assertTrue(actual)
    }

    /**
     * . + .
     * + . +
     * . + .
     */
    testSolutionNotExists() {
        let field = new Field(3, 3)
        let simpleCellMap = [
            [1, 0],
            [1, 2],
            [0, 1],
            [2, 1],
        ]
        fillFieldByMap(simpleCellMap, field);

        let actual = this.service.isSolutionExists(field)

        Assert.assertFalse(actual)
    }

    testBorderSolutionExists() {
        let settingsConfiguration = container.get(TEST_TYPES.testsSettingsConfiguration)
        let height = settingsConfiguration.getMinBurnedAmount()
        let field = new Field(height + 1, 1)
        for (let row = 0; row < height; row++) {
            field.setCell(0, row, new CellTest(0, row))
        }

        let actual = this.service.isSolutionExists(field)

        Assert.assertTrue(actual)
    }
}