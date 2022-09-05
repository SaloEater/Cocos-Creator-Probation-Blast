import { CellInterface } from "../../Scripts/Cell/CellInterface";
import { CellSimple } from "../../Scripts/Cell/CellSimple";
import { container } from "../../Scripts/container";
import { Field } from "../../Scripts/Field/Field";
import { SimilarCellsService } from "../../Scripts/SimilarCells/SimilarCellsService";
import { fillFieldByMap } from "../../Scripts/Tests/FieldTestHelper";
import { TEST_TYPES } from "../../Scripts/types_test";
import Assert from "../Assert";

export default class SimilarCellsServiceTest {
    service: SimilarCellsService

    constructor() {
        container
            .bind(TEST_TYPES.testsSimilarCellsService)
            .toInstance(SimilarCellsService)
            .inContainerScope()
            
        this.service = container.get(TEST_TYPES.testsSimilarCellsService)
    }

    /**
     * + +
     * + +
     */
    testGetAllNeighbourSimilarCellsSmaller() {
        let field = new Field(3, 3)
        let simpleCellMap = [
            [1, 0],
            [1, 1],
            [0, 0],
            [0, 1],
        ]
        let cellMatchingMap = [
            [1, 0],
            [0, 0],
            [0, 1],
        ]
        fillFieldByMap(simpleCellMap, field);

        let actual = this.service.findSimilarCells(
            field,
            1,
            1,
            field.getCellAt(1, 1)
        )

        Assert.assertArrayLengthEquals(cellMatchingMap.length, actual)
        this.assertAllPositionsAreFilled(cellMatchingMap, actual);
    }

    /**
     * . + .
     * + + +
     * . + .
     */
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
        fillFieldByMap(simpleCellMap, field);

        let actual = this.service.findSimilarCells(
            field,
            1,
            1,
            field.getCellAt(1, 1)
        )

        Assert.assertArrayLengthEquals(cellMatchingMap.length, actual)
        this.assertAllPositionsAreFilled(cellMatchingMap, actual);
    }

    /**
     * . + + + .
     * + . + . +
     * + + + + +
     * + . + . +
     * . + + + .
     */
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
        fillFieldByMap(simpleCellMap, field);

        let actual = this.service.findSimilarCells(
            field,
            2,
            2,
            field.getCellAt(2, 2)
        )

        Assert.assertArrayLengthEquals(cellMatchingMap.length, actual)
        this.assertAllPositionsAreFilled(cellMatchingMap, actual);
    }

    private assertAllPositionsAreFilled(
        cellMatchingMap: number[][],
        actual: CellInterface[]
    ) {
        let notPopulatedPositions = cellMatchingMap.filter(
            i => !actual.find(
                j => j.getColumn() === i[0] && j.getRow() === i[1]
            )
        );
        Assert.assertArrayLengthEquals(0, notPopulatedPositions);
    }
}