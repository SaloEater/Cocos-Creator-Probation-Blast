import { CellEmpty } from "../../Scripts/Cell/CellEmpty";
import { CellSimple } from "../../Scripts/Cell/CellSimple";
import { FieldColumn } from "../../Scripts/FieldColumn/FieldColumn";
import Assert from "../Assert";

export default class FieldColumnTest {
    testInitialization() {
        let expectedRows = 8;
        let expectedIndex = 3;
        let fieldColumn = new FieldColumn(expectedIndex, expectedRows)
        Assert.assertMapSizeEquals(expectedRows, fieldColumn.cells)
        Assert.assertEquals(expectedIndex, fieldColumn.columnIndex)
    }

    testSet() {
        let fieldColumn = new FieldColumn(0, 1)
        Assert.assertTypeEquals(CellEmpty, fieldColumn.getCellAt(0))
        fieldColumn.setCell(0, new CellSimple(0, 0))
        Assert.assertTypeEquals(CellSimple, fieldColumn.getCellAt(0))
    }
}