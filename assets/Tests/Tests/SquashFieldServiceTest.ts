import { CellSimple } from "../../Scripts/Cell/CellSimple";
import { container } from "../../Scripts/container";
import { Field } from "../../Scripts/Field/Field";
import { SquashFieldService } from "../../Scripts/SquashField/SquashFieldService";
import { TEST_TYPES } from "../../Scripts/types_test";
import Assert from "../Assert";

export default class SquashFieldServiceTest {
    service: SquashFieldService

    constructor() {
        container
            .bind(TEST_TYPES.testsSquashFieldService)
            .toInstance(SquashFieldService)
            .inContainerScope()
        this.service = container.get(TEST_TYPES.testsSquashFieldService)
    }

    testSquashLowHeight() {
        let field = new Field(2, 1)
        field.setCell(0, 0, new CellSimple(0, 0))

        this.service.squash(field)

        Assert.assertInstanceOf(CellSimple, field.getCellAt(0, 1))
    }

    testSquashLowHeightMultiColumns() {
        let field = new Field(2, 2)
        field.setCell(0, 0, new CellSimple(0, 0))
        field.setCell(1, 0, new CellSimple(1, 0))

        this.service.squash(field)

        Assert.assertInstanceOf(CellSimple, field.getCellAt(0, 1))
        Assert.assertInstanceOf(CellSimple, field.getCellAt(1, 1))
    }

    testSquashMediumHeight() {
        let field = new Field(5, 1)
        field.setCell(0, 0, new CellSimple(0, 0));
        field.setCell(0, 2, new CellSimple(0, 2));
        field.setCell(0, 3, new CellSimple(0, 3));

        this.service.squash(field)

        Assert.assertInstanceOf(CellSimple, field.getCellAt(0, 2))
        Assert.assertInstanceOf(CellSimple, field.getCellAt(0, 3))
        Assert.assertInstanceOf(CellSimple, field.getCellAt(0, 4))
    }
}