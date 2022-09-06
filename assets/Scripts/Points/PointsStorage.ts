import { PointsStorageInterface } from "./PointsStorageInterface"

export class PointsStorage implements PointsStorageInterface {
    points: number = 0

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