import { Component, Prefab, _decorator } from "cc";
import { container } from "../../container";
import { Random } from "../../Random/Random";
import { TYPES } from "../../types";
import { CellSuperPoolInterface } from "../CellSuperPoolInterface";

const {ccclass, property} = _decorator

@ccclass
export class CellSuperPoolComponent extends Component implements CellSuperPoolInterface {
    @property([Prefab])
    cells: Prefab[] = []

    onLoad() {
        container
            .bind(TYPES.cellSuperPool)
            .toConstant(this)
    }

    getAnyCellSuperPrefab(): Prefab {
        return this.cells[Random.between(
            0, 
            this.cells.length - 1
        )]
    }
}