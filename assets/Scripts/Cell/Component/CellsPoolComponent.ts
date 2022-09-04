import { Component, Prefab, _decorator } from "cc";
import { container } from "../../container";
import { TYPES } from "../../types";
import { CellsPoolInterface } from "../CellsPoolInterface";

const {ccclass, property} = _decorator

@ccclass
export class CellsPoolComponent extends Component implements CellsPoolInterface {
    @property([Prefab])
    cells: Prefab[] = []

    onLoad() {
        container
            .bind(TYPES.cellsPool)
            .toConstant(this)
    }

    getAnyCellPrefab(): Prefab {
        return this.cells[this.getRandomIndex(0, 4)]
    }

    getRandomIndex(min: number, max: number): number {
        return  Math.floor(Math.random() * (max - min + 1) + min);
    }

}