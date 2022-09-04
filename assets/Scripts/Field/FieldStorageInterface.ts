import { Field } from "./Field";

export interface FieldStorageInterface {
    set(field: Field): void;
    get(): Field
}