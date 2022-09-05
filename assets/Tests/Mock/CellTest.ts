import { CellInterface } from "../../Scripts/Cell/CellInterface"
import {CellSimple} from "../../Scripts/Cell/CellSimple"

export class CellTest extends CellSimple {
    constructor(column: number, row: number) {
        super(column, row)
    }
}