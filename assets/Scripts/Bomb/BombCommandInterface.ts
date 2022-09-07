import { Field } from "../Field/Field";

export interface BombCommandInterface {
    execute(field: Field, column: number, row: number, radius: number): void
}