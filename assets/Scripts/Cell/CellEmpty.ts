import { CellWithPosition } from "./CellWithPosition";
import { CellInterface } from "./CellInterface";

export class CellEmpty extends CellWithPosition {
    hasSameType(anotherCell: CellInterface): boolean {
        return anotherCell instanceof CellEmpty
    }
}