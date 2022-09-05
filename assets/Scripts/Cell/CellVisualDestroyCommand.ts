import { RealCurve } from "cc";
import { injected } from "saloeater-brandi";
import { TYPES } from "../types";
import { CellInterface } from "./CellInterface";
import { CellPositionCalculationsInterface } from "./CellPositionCalculationsInterface";
import { CellVisualDestroyCommandInterface } from "./CellVisualDestroyCommandInterface";
import { CellVisual } from "./Component/CellVisual";
import { EventTarget } from "cc";
import { EVENT_TYPES } from "../event_types";
import { EventClass } from "../Event/event";
import { CellBurnEndEvent } from "../BurnCells/Event/CellBurnEndEvent";

const eventTarget = new EventTarget()

export class CellVisualDestroyCommand implements CellVisualDestroyCommandInterface {
    constructor(
        private cellPositionCalculations: CellPositionCalculationsInterface
    ) {

    }

    execute(cell: CellVisual, originCell: CellInterface) {
        cell.startMovingTo(
            this.cellPositionCalculations.getXForColumn(originCell.getColumn()),
            this.cellPositionCalculations.getYForRow(originCell.getRow()),
        )
        setTimeout(() => {
            EventClass.emitEvent(new CellBurnEndEvent())
            cell.destroyCell()        
        }, 500)
    }
}

injected(CellVisualDestroyCommand, TYPES.cellPositionCalculations.optional)