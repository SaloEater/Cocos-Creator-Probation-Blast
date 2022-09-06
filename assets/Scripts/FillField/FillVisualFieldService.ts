import { instantiate, Size, UITransform } from "cc";
import { injected } from "saloeater-brandi";
import { CellSimple } from "../Cell/CellSimple";
import { CellsPoolInterface } from "../Cell/CellsPoolInterface";
import { CellVisual } from "../Cell/Component/CellVisual";
import { EventClass } from "../Event/event";
import { Field } from "../Field/Field";
import { GameSpaceAccessInterface } from "../Field/GameSpaceAccessInterface";
import { SettingsConfigurationInterface } from "../Settings/SettingsConfigurationInterface";
import { SquashFieldInterface } from "../SquashField/SquashFieldServiceInterface";
import { TYPES } from "../types";
import { FieldFillEndEvent } from "./Event/FieldFillEndEvent";
import { FillFieldServiceInterface } from "./FillFieldServiceInterface";

export class FillVisualFieldService
 implements FillFieldServiceInterface {
    constructor(
        private squashService: SquashFieldInterface,
        private cellsPool: CellsPoolInterface,
        private gameSpace: GameSpaceAccessInterface,
        private settingsConfiguration: SettingsConfigurationInterface,
    ) {
    }

    fill(field: Field): void {
        field.getNotFullColumns().forEach(i => {
            do {
                let cellPrefab = this.cellsPool.getAnyCellPrefab()
                let cellNode = instantiate(cellPrefab)
                this.gameSpace.getGameSpace().addChild(cellNode)

                let cellVisual = cellNode.getComponent(CellVisual)                
                let uiTransform = cellNode.getComponent(UITransform)
                uiTransform.setContentSize(new Size(
                    this.settingsConfiguration.getCellWidth(),
                    this.settingsConfiguration.getCellHeight(),
                ))

                cellVisual.setColumn(i.columnIndex)
                cellVisual.setRow(0)

                i.setCell(0, cellVisual)
                this.squashService.squashColumn(i)
            } while (!i.isFull())
        })
        EventClass.emitEvent(new FieldFillEndEvent(field))
    }
}

injected(
    FillVisualFieldService,
    TYPES.squashService.optional,
    TYPES.cellsPool.optional,
    TYPES.gameSpaceAccess.optional,
    TYPES.settingsConfiguration.optional,
)