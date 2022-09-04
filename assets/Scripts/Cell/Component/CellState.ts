import { Component, SpriteFrame, _decorator } from "cc"

const {ccclass, property} = _decorator

@ccclass
export class CellState extends Component {
    @property(SpriteFrame)
    cellTexture: SpriteFrame

    @property(SpriteFrame)
    burningTexture: SpriteFrame
}