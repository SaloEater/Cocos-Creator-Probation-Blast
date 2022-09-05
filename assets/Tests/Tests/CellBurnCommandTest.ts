import { CellBurnCommand } from "../../Scripts/BurnCells/CellBurnCommand";
import { container } from "../../Scripts/container";
import { Field } from "../../Scripts/Field/Field";
import { FieldStorage } from "../../Scripts/Field/FieldStorage";
import { FieldStorageInterface } from "../../Scripts/Field/FieldStorageInterface";
import { fillFieldByMap } from "../../Scripts/Tests/FieldTestHelper";
import { TYPES } from "../../Scripts/types";
import { TEST_TYPES } from "../../Scripts/types_test";
import Assert from "../Assert";
import { CellBurnMockCommand } from "../Mock/CellBurnMockCommand";
import { CellTest } from "../Mock/CellTest";

export class CellBurnCommandTest {
    command: CellBurnCommand
    fieldStorage: FieldStorageInterface

    constructor() {
        container
            .bind(TEST_TYPES.testsFieldStorage)
            .toInstance(FieldStorage)
            .inContainerScope()

        container
            .bind(TEST_TYPES.testCellBurnCommand)
            .toInstance(CellBurnMockCommand)
            .inContainerScope()

        this.command = container.get(TEST_TYPES.testCellBurnCommand)
        this.fieldStorage = container.get(TEST_TYPES.testsFieldStorage)
    }

    /**
     * . = .
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
        field.setCell(1, 0, new CellTest(1, 0))
        this.fieldStorage.set(field)

        this.command.execute(1, 1)
       
        /**
         * . . .
         * . . .
         * . = .
         */
        Assert.assertInstanceOf(CellTest, field.getCellAt(1, 2))
    }
}