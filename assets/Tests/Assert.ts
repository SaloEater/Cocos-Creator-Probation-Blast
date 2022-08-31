import { CellEmpty } from "../Scripts/Cell/CellEmpty"
import { CellInterface } from "../Scripts/Cell/CellInterface"

export default class Assert {
    static assertTypeEquals(expectedType: any, actual: any) {
        if (typeof expectedType !== typeof actual) {
            throw new Error(`Type ${typeof actual} is not equals expected ${typeof expectedType}`)
        }
    }
    static assertMapSizeEquals(expectedSize: number, field: Map<any, any>) {
        if (field.size !== expectedSize) {
            throw new Error(`Size of ${field.size} is not equals expected ${expectedSize}`)
        }
    }

    static assertEquals(expected: any, actual:any): void {
        if (expected !== actual) {
            throw new Error(`${actual} is not equals expected ${expected}`)
        }
    }
}