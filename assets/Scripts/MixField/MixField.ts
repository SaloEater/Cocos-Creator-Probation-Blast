import { EventClass } from "../Event/event";
import { Field } from "../Field/Field";
import { Random } from "../Random/Random";
import { UnplayableFieldWasMixedEvent } from "./Event/UnplayableFieldWasMixedEvent";
import { MixFieldInterface } from "./MixFieldInterface";

export class MixField implements MixFieldInterface {
    private a: number
    constructor() {
        this.a = 1 // Манипуляция чтобы контейнер смог создать объект без new
    }
    
    mixField(field: Field) {
        let columns = field.columns
        let rows = field.rows
        for (let column = 0; column < columns; column++) {
            for (let row = 0; row < rows; row++) {
                let cellOrigin = field.getCellAt(column, row)
                let columnOrigin = field.getColumnAt(column)

                let targetColumnVictim = Random.between(0, columns - 1)
                let targetRowVictim = Random.between(0, rows - 1)
                let columnVictim = field.getColumnAt(targetColumnVictim)
                let cellVictim = field.getCellAt(targetColumnVictim, targetRowVictim)

                columnVictim.setCell(targetRowVictim, cellOrigin)
                cellOrigin.setColumn(targetColumnVictim)
                cellOrigin.setRow(targetRowVictim)

                columnOrigin.setCell(row, cellVictim)
                cellVictim.setColumn(column)
                cellVictim.setRow(row)
            }   
        }
        
        EventClass.emitEvent(new UnplayableFieldWasMixedEvent(field))
    }
}