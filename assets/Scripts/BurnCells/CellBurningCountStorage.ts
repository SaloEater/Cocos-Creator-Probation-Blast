import { CellBurningCountStorageInterface } from "./CellBurningCountStorageInterface";

export class CellBurningCountStorage implements CellBurningCountStorageInterface {
    private a: number
    constructor() {
        this.a = 1 // Манипуляция чтобы контейнер смог создать объект без new
    }
    
    private count: number = 0
    private initialCount: number = 0

    set(count: number): void {
        this.count = count
        this.initialCount = count
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
        this.initialCount = 0
    }
    
    getInitialCount(): number {
        return this.initialCount
    }
}