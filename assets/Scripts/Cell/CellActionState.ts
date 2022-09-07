export class CellActionState {
    private isBombActive: boolean = false
    private isSwapActive: boolean = false

    isSwap() {
        return this.isSwapActive
    }

    setSwap(isSwapActive: boolean) {
        this.isSwapActive = isSwapActive
    }

    setBomb(isBombActive: boolean) {
        this.isBombActive = isBombActive
    }

    isBomb(): boolean {
        return this.isBombActive
    }

    isSomethingSelected(): boolean {
        return this.isBomb() || this.isSwap()
    }
}