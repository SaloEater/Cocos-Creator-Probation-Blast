import { _decorator, Component, UITransform, Vec3 } from "cc";
import { container } from "../../container";
import { TYPES } from "../../types";
import { CellInterface } from "../CellInterface";
import { CellPositionCalculationsInterface } from "../CellPositionCalculationsInterface";
import { CellSimple } from "../CellSimple";

const { ccclass } = _decorator

@ccclass
export class CellVisual extends Component implements CellInterface {
    uiTransform: UITransform
    cellPositionCalculations: CellPositionCalculationsInterface

    cellColumn: number
    cellRow: number

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
    }

    getColumn(): number {
        return this.cellColumn
    }

    getRow(): number {
        return this.cellRow
    }
}