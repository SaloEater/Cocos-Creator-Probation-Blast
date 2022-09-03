import { CellSimple } from "../Cell/CellSimple";
import { Field } from "../Field/Field";

function fillFieldByMap(simpleCellMap: number[][], field: Field) {
    simpleCellMap.forEach(
        i => field.setCell(i[0], i[1], new CellSimple(i[0], i[1]))
    );
}

export {fillFieldByMap}