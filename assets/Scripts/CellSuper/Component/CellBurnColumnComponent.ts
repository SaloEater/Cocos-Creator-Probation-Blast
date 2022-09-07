import { _decorator } from "cc";
import { BombCommandInterface } from "../../BonusBomb/BombCommandInterface";
import { CellVisual } from "../../Cell/Component/CellVisual";
import { container } from "../../container";
import { FieldStorageInterface } from "../../Field/FieldStorageInterface";
import { TYPES } from "../../types";
import { BurnColumnCommand } from "../BurnColumnCommand";
import { BurnRowCommand } from "../BurnRowCommand";

const {ccclass} = _decorator

@ccclass
export class CellBurnColumnComponent extends CellVisual {
    burnColumnCommand: BurnColumnCommand
    fieldStorage: FieldStorageInterface

    onLoad() {
        super.onLoad()
        this.burnColumnCommand = container.get(TYPES.burnColumnCommand)
        this.fieldStorage = container.get(TYPES.fieldStorage)
    }

    burnCell(): void {
        let field = this.fieldStorage.get()
        this.burnColumnCommand.execute(
            field,
            this.cellColumn,
            this.cellRow
        )
    }
}