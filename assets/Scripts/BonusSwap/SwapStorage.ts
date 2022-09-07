export class SwapStorage {
    column?: number = null
    row?: number = null

    setOrigin(column: number, row: number): void {
        this.column = column
        this.row = row
    }

    getOriginColumn(): number {
        return this.column
    }

    getOriginRow(): number {
        return this.row
    }

    isSet(): boolean {
        return this.column !== null && this.row !== null
    }

    reset() {
        this.column = null
        this.row = null
    }
}