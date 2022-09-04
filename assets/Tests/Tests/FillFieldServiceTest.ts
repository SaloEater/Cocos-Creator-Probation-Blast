import { CellSimple } from "../../Scripts/Cell/CellSimple";
import { container } from "../../Scripts/container";
import { Field } from "../../Scripts/Field/Field";
import { FillFieldService } from "../../Scripts/FillField/FillFieldService";
import { TEST_TYPES } from "../../Scripts/types_test";
import Assert from "../Assert";

export class FillFieldServiceTest {
    service: FillFieldService

    constructor() {
        container
            .bind(TEST_TYPES.testsFillFieldService)
            .toInstance(FillFieldService)
            .inContainerScope()

        this.service = container.get(TEST_TYPES.testsFillFieldService)
    }

    testFill() {
        let field = new Field(3, 1)

        this.service.fill(field)

        for (let i = 0; i < field.rows; i++) {
            Assert.assertInstanceOf(CellSimple, field.getCellAt(0, i))
        }
    }
}