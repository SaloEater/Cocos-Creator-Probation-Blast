export class CellActionState {
    private isBombActive: boolean

    setBomb(isBombActive: boolean) {
        this.isBombActive = isBombActive
    }

    isBomb(): boolean {
        return this.isBombActive
    }

    isSomethingSelected(): boolean {
        return this.isBomb()
    }
}