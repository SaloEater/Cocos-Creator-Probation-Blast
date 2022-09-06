export interface PointsStorageInterface {
    increment(): void
    decrement(): void
    set(points: number): void
    add(points: number): void
    reduce(points: number): void
    reset(): void
}