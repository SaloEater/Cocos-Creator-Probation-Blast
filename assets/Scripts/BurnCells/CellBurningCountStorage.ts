import { CellBurningCountStorageInterface } from "./CellBurningCountStorageInterface";

export class CellBurningCountStorage implements CellBurningCountStorageInterface {
    private count: number = 0

    set(count: number): void {
        this.count = count
    }

    get(): number {
        return this.count
    }

    increment(): void {
        this.count++
    }
    
    decrement(): void {
        this.count--
    }
    
    reset(): void {
        this.count = 0
    }
}