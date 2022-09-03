import { CellSimple } from "../Cell/CellSimple";
import { Field } from "../Field/Field";
import { FillFieldServiceInterface } from "./FillFieldServiceInterface";

export class FillFieldService
 implements FillFieldServiceInterface {
    fill(field: Field): void {
        for (let i = 0; i < field.columns; i++) {
            for (let j = 0; j < field.rows; j++) {
                field.setCell(i, j, new CellSimple(i, j))
            }
        }
    }
}