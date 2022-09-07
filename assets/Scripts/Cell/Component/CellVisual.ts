import { _decorator, Component, UITransform, Vec3, input, Input, __private, EventMouse, Animation } from "cc";
import { CellBurnCommand } from "../../BurnCells/CellBurnCommand";
import { CellBurnCommandInterface } from "../../BurnCells/CellBurnCommandInterface";
import { container } from "../../container";
import { TYPES } from "../../types";
import { CellActionCommandInterface } from "../CellActionCommandInterface";
import { CellInterface } from "../CellInterface";
import { CellPositionCalculationsInterface } from "../CellPositionCalculationsInterface";
import { CellSimple } from "../CellSimple";
import { MoveCellVisualToPositionCommandInterface } from "../MoveCellVisualToPositionCommandInterface";
import { CellMovementComponent } from "./CellMovementComponent";
import { CellState } from "./CellState";

const { ccclass } = _decorator

@ccclass
export class CellVisual extends Component implements CellInterface {
    uiTransform: UITransform
    cellActionCommand: CellActionCommandInterface
    cellState: CellState
    animation: Animation
    cellMovement: CellMovementComponent
    moveCellCommand: MoveCellVisualToPositionCommandInterface

    cellColumn: number
    cellRow: number

    constructor(name?: string) {
        super(name)
    }

    setColumn(newColumn: number): void {
        //this.initDependencies()
        this.cellColumn = newColumn
        this.moveCellCommand.execute(this)
    }

    setRow(newRow: number): void {
        //this.initDependencies()
        this.cellRow = newRow
        this.moveCellCommand.execute(this)
    }

    setCell(newColumn: number, newRow: number) {
        this.cellColumn = newColumn
        this.cellRow = newRow
        this.moveCellCommand.execute(this)
    }
    
    onLoad() {
        this.uiTransform = this.node.getComponent(UITransform)
        this.moveCellCommand = container.get(TYPES.moveCellVisualToPositionCommand)
        this.cellState = this.node.getComponent(CellState)
        this.animation = this.node.getComponent(Animation)
        this.cellMovement = this.node.getComponent(CellMovementComponent)

        this.node.on(Input.EventType.MOUSE_UP, this.burnCell, this)
    }

    burnCell(): void {
        if (!this.cellActionCommand) {
            this.cellActionCommand = container.get(TYPES.cellActionCommand)
        }
        this.cellActionCommand.execute(this.cellColumn, this.cellRow)
    }

    getColumn(): number {
        return this.cellColumn
    }

    getRow(): number {
        return this.cellRow
    }
    
    hasSameType(anotherCell: CellInterface): boolean {
        if (!(anotherCell instanceof CellVisual)) {
            return false
        }

        return this.cellState.cellTexture.name === anotherCell.cellState.cellTexture.name
    }
    
    destroyCell() {
        if (this.node) {
            this.node.destroy()
        }
    }

    playMoveAnimation() {
        this.animation.play()
    }

    startMovingTo(x: number, y: number) {
        this.cellMovement.setTargetX(x)
        this.cellMovement.setTargetY(y)
        this.cellMovement.startMoving()
    }
}