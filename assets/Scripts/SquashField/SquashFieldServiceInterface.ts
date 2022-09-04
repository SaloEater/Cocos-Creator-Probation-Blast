import { Field } from "../Field/Field";
import { FieldColumn } from "../FieldColumn/FieldColumn";

export interface SquashFieldInterface {
    squashColumn(i: FieldColumn): void;
    squash(field: Field)
}