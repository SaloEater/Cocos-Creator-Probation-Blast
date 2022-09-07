import { _decorator } from "cc";
import { BonusComponent } from "../../Bonus/Component/BonusComponent";

const {ccclass} = _decorator

@ccclass
export class BombComponent extends BonusComponent {
    protected changeState(): void {
        this.cellActionState.setBomb(!this.cellActionState.isBomb())
    }

    protected isCurrentBonusSelected(): boolean {
        return this.cellActionState.isBomb()
    }
}