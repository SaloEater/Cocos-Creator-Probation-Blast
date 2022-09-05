import { injected } from "saloeater-brandi";
import { CellBurnCommand } from "../../Scripts/BurnCells/CellBurnCommand";
import { TEST_TYPES } from "../../Scripts/types_test";

export class CellBurnMockCommand extends CellBurnCommand {
}

injected(
    CellBurnMockCommand,
    TEST_TYPES.testsCellBurningService.optional,
    TEST_TYPES.testsFieldStorage.optional,
    TEST_TYPES.testsSquashFieldService.optional,
    TEST_TYPES.testsSettingsConfiguration.optional,
)