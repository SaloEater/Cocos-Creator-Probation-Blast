import { CellSimple } from "../Cell/CellSimple";
import { Field } from "../Field/Field";
import { FieldFillingStrategyInterface } from "./FieldFillingStrategyInterface";

export class FieldFillingSimpleStrategy
 implements FieldFillingStrategyInterface {
    fill(field: Field): void {
        for (let i = 0; i < field.columns; i++) {
            for (let j = 0; j < field.rows; j++) {
                field.setCell(i, j, new CellSimple(i, j))
            }
        }
    }
}