import { injected } from "saloeater-brandi";
import { CellSimple } from "../Cell/CellSimple";
import { Field } from "../Field/Field";
import { SquashFieldInterface } from "../SquashField/SquashFieldServiceInterface";
import { TYPES } from "../types";
import { FillFieldServiceInterface } from "./FillFieldServiceInterface";

export class FillFieldService implements FillFieldServiceInterface {
    constructor(private squashService: SquashFieldInterface) {
    }

    fill(field: Field): void {
        field.getNotFullColumns().forEach(i => {
            do {
                i.setCell(0, new CellSimple(i.columnIndex, 0))
                this.squashService.squashColumn(i)
            } while (!i.isFull())
        })
        
    }
}

injected(FillFieldService, TYPES.squashService.optional)