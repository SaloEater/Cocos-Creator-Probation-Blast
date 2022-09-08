import { _decorator } from "cc";
import { CellVisual } from "../../Cell/Component/CellVisual";
import { container } from "../../container";
import { FieldStorageInterface } from "../../Field/FieldStorageInterface";
import { TYPES } from "../../types";
import { BurnFieldCommand } from "../BurnFieldCommand";
import { CellSuper } from "./CellSuper";

const {ccclass} = _decorator

@ccclass
export class CellBurnFieldComponent extends CellSuper {
    burnFieldCommand: BurnFieldCommand
    fieldStorage: FieldStorageInterface

    onLoad() {
        super.onLoad()
        this.burnFieldCommand = container.get(TYPES.burnFieldCommand)
        this.fieldStorage = container.get(TYPES.fieldStorage)
    }

    burnCell(): void {
        let field = this.fieldStorage.get()
        this.burnFieldCommand.execute(
            field,
            this.cellColumn,
            this.cellRow
        )
    }
}