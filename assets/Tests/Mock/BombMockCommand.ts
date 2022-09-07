import { injected } from "saloeater-brandi";
import { BombCommand } from "../../Scripts/BonusBomb/BombCommand";
import { BombCommandInterface } from "../../Scripts/BonusBomb/BombCommandInterface";
import { CellsInRadiusInterface } from "../../Scripts/BonusBomb/CellsInRadiusServiceInterface";
import { CellBurningServiceInterface } from "../../Scripts/BurnCells/CellBurningServiceInterface";
import { Field } from "../../Scripts/Field/Field";
import { TEST_TYPES } from "../../Scripts/types_test";

export class BombMockCommand extends BombCommand {
    protected emitEvent() { 
    }
}

injected(
    BombMockCommand,
    TEST_TYPES.testsCellsInRadius.optional,
    TEST_TYPES.testsCellBurningService.optional,
)