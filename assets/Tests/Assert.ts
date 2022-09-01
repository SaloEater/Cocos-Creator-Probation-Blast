import { CellEmpty } from "../Scripts/Cell/CellEmpty"
import { CellInterface } from "../Scripts/Cell/CellInterface"

export default class Assert {
    static assertArrayLengthEquals(expectedLength: number, actualArray: any[]) {
        if (actualArray.length !== expectedLength) {
            throw new Error(`Length ${actualArray.length} is not equals expected ${expectedLength}`)
        }
    }
    static assertInstanceOf(expectedType: any, actual: any) {
        if (!(actual instanceof expectedType)) {
            throw new Error(`Type ${actual.constructor.name} is not equals expected ${expectedType}`)
        }
    }
    static assertMapSizeEquals(expectedSize: number, actualMap: Map<any, any>) {
        if (actualMap.size !== expectedSize) {
            throw new Error(`Size of ${actualMap.size} is not equals expected ${expectedSize}`)
        }
    }

    static assertEquals(expected: any, actual:any): void {
        if (expected !== actual) {
            throw new Error(`${actual} is not equals expected ${expected}`)
        }
    }
}