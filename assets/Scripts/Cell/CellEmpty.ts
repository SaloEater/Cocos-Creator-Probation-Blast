import { CellInterface } from "./CellInterface";

export class CellEmpty implements CellInterface {
    x: number
    y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    getX(): number {
        return this.x
    }

    getY(): number {
        return this.y
    }
}