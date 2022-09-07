import { _decorator, Component, Button, EventHandler, Input, Sprite, ImageAsset, SpriteFrame } from "cc";
import { CellActionState } from "../../Cell/CellActionState";
import { InputStateInterface } from "../../CocosCreator/InputStateInterface";
import { container } from "../../container";
import { EventClass } from "../../Event/event";
import { TYPES } from "../../types";
import { BonusChangedEvent } from "../Event/BonusChangedEvent";

const {ccclass, property} = _decorator

@ccclass
export abstract class BonusComponent extends Component {
    cellActionState: CellActionState
    inputState: InputStateInterface
    button: Sprite

    @property(SpriteFrame)
    turnedOnImage: SpriteFrame

    @property(SpriteFrame)
    turnedOffImage: SpriteFrame

    @property(Sprite)
    indicator: Sprite

    start() {
        this.cellActionState = container.get(TYPES.cellActionState)
        this.inputState = container.get(TYPES.inputState)
        this.button = this.node.parent.getComponent(Sprite)
        this.button.node.on(Input.EventType.MOUSE_UP, this.changeStateInternal, this)
    }

    private changeStateInternal(): void {
        if (
            !this.inputState.isOn()
            || this.cellActionState.isSomethingSelected() && !this.isCurrentBonusSelected()
        ) {
            return
        }

        this.changeState();
        EventClass.emitEvent(new BonusChangedEvent())

        if (this.isCurrentBonusSelected()) {
            this.indicator.spriteFrame = this.turnedOnImage
        } else {
            this.indicator.spriteFrame = this.turnedOffImage
        }
    }

    protected abstract changeState(): void

    protected abstract isCurrentBonusSelected(): boolean
}