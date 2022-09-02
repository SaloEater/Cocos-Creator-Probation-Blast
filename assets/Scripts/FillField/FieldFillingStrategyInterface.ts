import { Field } from "./Field";

export interface FieldFillingStrategyInterface {
    fill(field: Field): void
}