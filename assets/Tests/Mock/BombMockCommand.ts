import { injected } from "saloeater-brandi";
import { BombCommand } from "../../Scripts/BonusBomb/BombCommand";
import { TEST_TYPES } from "../../Scripts/types_test";

export class BombMockCommand extends BombCommand {
    protected emitEvent() { 
    }
}

injected(
    BombMockCommand,
    TEST_TYPES.testsCellsInRadius.optional,
    TEST_TYPES.testsCellBurningService.optional,
    TEST_TYPES.testsInputState.optional,
)