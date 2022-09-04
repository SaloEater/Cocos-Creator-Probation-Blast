import { CellBurningService } from "../../Scripts/BurnCells/CellBurningService"
import { CellEmpty } from "../../Scripts/Cell/CellEmpty"
import { CellSimple } from "../../Scripts/Cell/CellSimple"
import { container } from "../../Scripts/container"
import { Field } from "../../Scripts/Field/Field"
import { fillFieldByMap } from "../../Scripts/Tests/FieldTestHelper"
import { TEST_TYPES } from "../../Scripts/types_test"
import Assert from "../Assert"

export default class CellBurningServiceTest {
    service: CellBurningService

    constructor() {
        container
            .bind(TEST_TYPES.testsCellBurningService)
            .toInstance(CellBurningService)
            .inContainerScope()
            
        this.service = container.get(TEST_TYPES.testsCellBurningService)
    }

    /**
     * . + .
     * + + +
     * . + .
     */
    testBurnCellAtSmallField(){
        let field = new Field(3, 3)
        let simpleCellMap = [
            [1, 0],
            [1, 1],
            [1, 2],
            [0, 1],
            [2, 1],
        ]
        fillFieldByMap(simpleCellMap, field);

        this.service.burnCellAt(field, 1, 1, 1)

        this.assertFieldIsEmpty(field)
    }

    /**
     * . + + + .
     * + . + . +
     * + + + + +
     * + . + . +
     * . + + + .
     */
    testBurnCellAtMediumField(){
        let field = new Field(5, 5)
        let simpleCellMap = [
            [2, 2],
            [1, 2],
            [0, 2],
            [0, 1],
            [0, 3],
            [3, 2],
            [4, 2],
            [4, 1],
            [4, 3],
            [2, 1],
            [2, 0],
            [1, 0],
            [3, 0],
            [2, 3],
            [2, 4],
            [1, 4],
            [3, 4],
        ]
        fillFieldByMap(simpleCellMap, field);

        this.service.burnCellAt(field, 1, 1, 1)        

        this.assertFieldIsEmpty(field)
    }

    /**
     * . + .
     * + + +
     * . + .
     */
    testDontBurnCellAtSmallFieldWhenNotEnoughCells(){
        let field = new Field(3, 3)
        let simpleCellMap = [
            [1, 0],
            [1, 1],
            [1, 2],
            [0, 1],
            [2, 1],
        ]
        fillFieldByMap(simpleCellMap, field);

        this.service.burnCellAt(field, 1, 1, 6)

        simpleCellMap.forEach(i => 
            Assert.assertInstanceOf(CellSimple, field.getCellAt(i[0], i[1]))
        )
    }

    private assertFieldIsEmpty(field: Field): void {
        field.field.forEach(
            i => i.cells.forEach(j => Assert.assertInstanceOf(CellEmpty, j))
        )
    }
}