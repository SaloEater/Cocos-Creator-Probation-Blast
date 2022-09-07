import { _decorator } from "cc";
import { BonusComponent } from "../../Bonus/Component/BonusComponent";

const {ccclass} = _decorator

@ccclass
export class SwapComponent extends BonusComponent {
    protected changeState(): void {
        this.cellActionState.setSwap(!this.cellActionState.isSwap())
    }

    protected isCurrentBonusSelected(): boolean {
        return this.cellActionState.isSwap()
    }
}