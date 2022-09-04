import { Node, Prefab } from "cc";
import { CellVisual } from "./Component/CellVisual";

export interface CellsPoolInterface {
    getAnyCellPrefab(): Prefab
}