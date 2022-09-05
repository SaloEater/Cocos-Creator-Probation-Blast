import { CellWithPosition } from "./CellWithPosition";
import { CellEmpty } from "./CellEmpty";
import { CellInterface } from "./CellInterface";

export class CellSimple extends CellWithPosition {
    hasSameType(anotherCell: CellInterface): boolean {
        return anotherCell instanceof CellSimple
    }
}