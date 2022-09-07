import { PointsStorageInterface } from "./PointsStorageInterface"

export class PointsStorage implements PointsStorageInterface {
    private a: number
    constructor() {
        this.a = 1 // Манипуляция чтобы контейнер смог создать объект без new
    }
    
    points: number = 0

    get(): number {
        return this.points
    }

    increment(): void {
        this.points++
    }

    decrement(): void {
        this.points--
    }

    set(points: number): void {
        this.points = points
    }

    add(points: number): void {
        this.points += points
    }

    reduce(points: number): void {
        this.add(-points)
    }

    reset(): void {
        this.points = 0
    }
}