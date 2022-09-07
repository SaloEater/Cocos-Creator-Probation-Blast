import { BombCommand } from "../../Scripts/Bomb/BombCommand";
import { CellsInRadiusService } from "../../Scripts/Bomb/CellsInRadiusService";
import { CellBurnCommand } from "../../Scripts/BurnCells/CellBurnCommand";
import { CellEmpty } from "../../Scripts/Cell/CellEmpty";
import { CellSimple } from "../../Scripts/Cell/CellSimple";
import { InputState } from "../../Scripts/CocosCreator/InputState";
import { container } from "../../Scripts/container";
import { Field } from "../../Scripts/Field/Field";
import { FieldStorage } from "../../Scripts/Field/FieldStorage";
import { FieldStorageInterface } from "../../Scripts/Field/FieldStorageInterface";
import { fillFieldByMap } from "../../Scripts/Tests/FieldTestHelper";
import { TYPES } from "../../Scripts/types";
import { TEST_TYPES } from "../../Scripts/types_test";
import Assert from "../Assert";
import { BombMockCommand } from "../Mock/BombMockCommand";
import { CellBurningMockService } from "../Mock/CellBurningMockService";
import { CellBurnMockCommand } from "../Mock/CellBurnMockCommand";
import { CellTest } from "../Mock/CellTest";

export class BombCommandTest {
    command: BombCommand

    constructor() {
        container
            .bind(TEST_TYPES.testsCellBurningService)
            .toInstance(CellBurningMockService)
            .inContainerScope()

        container
            .bind(TEST_TYPES.testsCellsInRadius)
            .toInstance(CellsInRadiusService)
            .inContainerScope()

        container
            .bind(TEST_TYPES.testsBombCommand)
            .toInstance(BombMockCommand)
            .inContainerScope()

        this.command = container.get(TEST_TYPES.testsBombCommand)
    }

    /**
     * + + .
     * + + +
     * . + .
     */
     testExecute(){
        let field = new Field(3, 3)
        let simpleCellMap = [
            [1, 0],
            [1, 1],
            [1, 2],
            [0, 1],
            [2, 1],
        ]
        fillFieldByMap(simpleCellMap, field);
        field.setCell(0, 0, new CellSimple(0, 0))

        this.command.execute(field, 1, 1, 1)
       
        Assert.assertInstanceOf(CellSimple, field.getCellAt(0, 0))
        simpleCellMap.forEach(i => 
            Assert.assertInstanceOf(CellEmpty, field.getCellAt(i[0], i[1]))
        )
    }
}