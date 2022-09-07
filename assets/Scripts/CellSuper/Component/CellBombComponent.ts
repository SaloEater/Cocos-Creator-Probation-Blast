import { _decorator } from "cc";
import { BombCommandInterface } from "../../BonusBomb/BombCommandInterface";
import { CellVisual } from "../../Cell/Component/CellVisual";
import { container } from "../../container";
import { FieldStorageInterface } from "../../Field/FieldStorageInterface";
import { TYPES } from "../../types";

const {ccclass} = _decorator

@ccclass
export class CellBombComponent extends CellVisual {
    bombCommand: BombCommandInterface
    fieldStorage: FieldStorageInterface

    onLoad() {
        super.onLoad()
        this.bombCommand = container.get(TYPES.bombCommand)
        this.fieldStorage = container.get(TYPES.fieldStorage)
    }

    burnCell(): void {
        let field = this.fieldStorage.get()
        this.bombCommand.execute(
            field,
            this.cellColumn,
            this.cellRow,
            Math.max(field.columns, field.rows)
        )
    }
}