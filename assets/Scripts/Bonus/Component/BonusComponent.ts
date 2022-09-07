import { _decorator, Component, Button, EventHandler, ButtonComponent, Input, Sprite, ImageAsset, SpriteFrame } from "cc";
import { CellActionState } from "../../Cell/CellActionState";
import { container } from "../../container";
import { TYPES } from "../../types";

const {ccclass, property} = _decorator

@ccclass
export abstract class BonusComponent extends Component {
    cellActionState: CellActionState
    button: Sprite

    @property(SpriteFrame)
    turnedOnImage: SpriteFrame

    @property(SpriteFrame)
    turnedOffImage: SpriteFrame

    @property(Sprite)
    indicator: Sprite

    start() {
        this.cellActionState = container.get(TYPES.cellActionState)
        this.button = this.node.parent.getComponent(Sprite)
        this.button.node.on(Input.EventType.MOUSE_UP, this.changeStateInternal, this)
    }

    private changeStateInternal(): void {
        if (this.cellActionState.isSomethingSelected() && !this.isCurrentBonusSelected()) {
            return
        }

        this.changeState();

        if (this.isCurrentBonusSelected()) {
            this.indicator.spriteFrame = this.turnedOnImage
        } else {
            this.indicator.spriteFrame = this.turnedOffImage
        }
    }

    protected abstract changeState(): void

    protected abstract isCurrentBonusSelected(): boolean
}