import { _decorator } from "cc";
import { CellVisual } from "../../Cell/Component/CellVisual";
import { container } from "../../container";
import { FieldStorageInterface } from "../../Field/FieldStorageInterface";
import { TYPES } from "../../types";
import { BurnRowCommand } from "../BurnRowCommand";

const {ccclass} = _decorator

@ccclass
export class CellBurnRowComponent extends CellVisual {
    burnRowCommand: BurnRowCommand
    fieldStorage: FieldStorageInterface

    onLoad() {
        super.onLoad()
        this.burnRowCommand = container.get(TYPES.burnRowCommand)
        this.fieldStorage = container.get(TYPES.fieldStorage)
    }

    burnCell(): void {
        let field = this.fieldStorage.get()
        this.burnRowCommand.execute(
            field,
            this.cellColumn,
            this.cellRow
        )
    }
}