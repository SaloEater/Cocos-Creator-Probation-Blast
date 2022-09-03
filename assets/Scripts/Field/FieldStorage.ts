import { Field } from "./Field";
import { FieldStorageInterface } from "./FieldStorageInterface";

export class FieldStorage implements FieldStorageInterface {
    field: Field

    set(field: Field) {
        this.field = field
    }

    get(): Field {
        return this.field
    }

}