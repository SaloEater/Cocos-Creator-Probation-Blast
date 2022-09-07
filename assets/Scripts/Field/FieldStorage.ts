import { Field } from "./Field";
import { FieldStorageInterface } from "./FieldStorageInterface";

export class FieldStorage implements FieldStorageInterface {
    private a: number
    constructor() {
        this.a = 1 // Манипуляция чтобы контейнер смог создать объект без new
    }
    
    field: Field

    set(field: Field) {
        this.field = field
    }

    get(): Field {
        return this.field
    }

}