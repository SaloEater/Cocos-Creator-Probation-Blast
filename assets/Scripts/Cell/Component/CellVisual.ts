import { _decorator, Component, UITransform, Vec3, input, Input, __private, EventMouse } from "cc";
import { CellBurnCommand } from "../../BurnCells/CellBurnCommand";
import { CellBurnCommandInterface } from "../../BurnCells/CellBurnCommandInterface";
import { container } from "../../container";
import { TYPES } from "../../types";
import { CellInterface } from "../CellInterface";
import { CellPositionCalculationsInterface } from "../CellPositionCalculationsInterface";
import { CellSimple } from "../CellSimple";
import { CellState } from "./CellState";

const { ccclass } = _decorator

@ccclass
export class CellVisual extends Component implements CellInterface {
    uiTransform: UITransform
    cellPositionCalculations: CellPositionCalculationsInterface
    cellBurnCommand: CellBurnCommandInterface
    cellState: CellState

    cellColumn: number
    cellRow: number

    constructor(name?: string) {
        super(name)
    }

    setColumn(newColumn: number): void {
        this.initDependencies()
        this.cellColumn = newColumn
        let currentPosition = this.node.getPosition()

        this.node.setPosition(new Vec3(
            this.cellPositionCalculations.getXForColumn(newColumn),
            currentPosition.y,
            currentPosition.z,
        ))
    }

    setRow(newRow: number): void {
        this.initDependencies()
        this.cellRow = newRow
        let currentPosition = this.node.getPosition()

        this.node.setPosition(new Vec3(
            currentPosition.x,
            this.cellPositionCalculations.getYForRow(newRow),
            currentPosition.z,
        ))
    }
    
    initDependencies() {
        this.uiTransform = this.node.getComponent(UITransform)
        this.cellPositionCalculations = container.get(TYPES.cellPositionCalculations)
        this.cellBurnCommand = new CellBurnCommand()
        this.cellState = this.node.getComponent(CellState)
        this.node.on(Input.EventType.MOUSE_UP, this.burnCell, this)
    }

    burnCell(event: EventMouse): void {
        this.cellBurnCommand.execute(this.cellColumn, this.cellRow)
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
        this.node.destroy()
    }
}