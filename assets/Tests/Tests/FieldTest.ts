import { CellEmpty } from "../../Scripts/Cell/CellEmpty";
import { CellInterface } from "../../Scripts/Cell/CellInterface";
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
        Assert.assertInstanceOf(CellEmpty, field.getCellAt(0, 0))
        field.setCell(0, 0, new CellSimple(0, 0))
        Assert.assertInstanceOf(CellSimple, field.getCellAt(0, 0))
    }

    testGetAllNeighbourSimilarCells() {
        let field = new Field(3, 3)
        let simpleCellMap = [
            [1, 0],
            [1, 1],
            [1, 2],
            [0, 1],
            [2, 1],
        ]
        let cellMatchingMap = [
            [1, 0],
            [1, 2],
            [0, 1],
            [2, 1],
        ]
        FieldTest.fillFieldByMap(simpleCellMap, field);

        let actual = field.getAllNeighbourSimilarCells(
            1,
            1,
            field.getCellAt(1, 1)
        )

        Assert.assertArrayLengthEquals(cellMatchingMap.length, actual)
        FieldTest.assertAllPositionsAreFilled(cellMatchingMap, actual);
    }

    testGetAllNeighbourSimilarCellsBiggerField() {
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
        let cellMatchingMap = [
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
        FieldTest.fillFieldByMap(simpleCellMap, field);

        let actual = field.getAllNeighbourSimilarCells(
            2,
            2,
            field.getCellAt(2, 2)
        )

        Assert.assertArrayLengthEquals(cellMatchingMap.length, actual)
        FieldTest.assertAllPositionsAreFilled(cellMatchingMap, actual);
    }

    static fillFieldByMap(simpleCellMap: number[][], field: Field) {
        simpleCellMap.forEach(
            i => field.setCell(i[0], i[1], new CellSimple(i[0], i[1]))
        );
    }

    static assertAllPositionsAreFilled(cellMatchingMap: number[][], actual: CellInterface[]) {
        let notPopulatedPositions = cellMatchingMap.filter(
            i => !actual.find(
                j => j.getColumn() === i[0] && j.getRow() === i[1]
            )
        );
        Assert.assertArrayLengthEquals(0, notPopulatedPositions);
    }
}