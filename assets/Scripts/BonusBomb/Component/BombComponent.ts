import { _decorator, Component, Button, EventHandler, Input, Sprite, ImageAsset, SpriteFrame } from "cc";
import { BonusComponent } from "../../Bonus/Component/BonusComponent";
import { CellActionState } from "../../Cell/CellActionState";
import { container } from "../../container";
import { TYPES } from "../../types";

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