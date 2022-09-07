import { Field } from "../Field/Field";

export interface SwapCommandInterface {
    execute(field: Field, column: number, row: number): void
}