import { _decorator, Component, Button, EventHandler, ButtonComponent, Input, Sprite, ImageAsset, SpriteFrame } from "cc";
import { BonusComponent } from "../../Bonus/Component/BonusComponent";
import { CellActionState } from "../../Cell/CellActionState";
import { container } from "../../container";
import { TYPES } from "../../types";

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