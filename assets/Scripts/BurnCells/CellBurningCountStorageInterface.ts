export interface CellBurningCountStorageInterface {
    set(count: number): void
    get(): number
    increment(): void
    decrement(): void
    reset(): void
    getInitialCount(): number
}