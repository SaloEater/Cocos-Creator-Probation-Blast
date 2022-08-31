import { CellEmpty } from "../../Scripts/Cell/CellEmpty";
import { CellSimple } from "../../Scripts/Cell/CellSimple";
import { Field } from "../../Scripts/Field/Field";
import Assert from "../Assert";

export default class FieldTest {
    testInitialization() {
        let expectedColumns = 8;
        let field = new Field(1, expectedColumns)
        Assert.assertMapSizeEquals(expectedColumns, field.field)
    }

    testSet() {
        let field = new Field(1, 1)
        Assert.assertTypeEquals(CellEmpty, field.getCellAt(0, 0))
        field.setCell(0, 0, new CellSimple(0, 0))
        Assert.assertTypeEquals(CellSimple, field.getCellAt(0, 0))
    }
}