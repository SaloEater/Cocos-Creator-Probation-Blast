import { Component } from "cc";
import { CellInterface } from "./CellInterface";
import { CellSimple } from "./CellSimple";

export class CellVisual extends Component implements CellInterface {
    cellColumn: number
    cellRow: number

    setColumn(newColumn: number): void {
        this.cellColumn = newColumn
    }

    setRow(row: number): void {
        this.cellRow = row
    }

    getColumn(): number {
        return this.cellColumn
    }

    getRow(): number {
        return this.cellRow
    }
}