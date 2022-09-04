import { instantiate, Size, UITransform } from "cc";
import { CellSimple } from "../Cell/CellSimple";
import { CellsPoolInterface } from "../Cell/CellsPoolInterface";
import { CellVisual } from "../Cell/Component/CellVisual";
import { container } from "../container";
import { Field } from "../Field/Field";
import { GameSpaceAccessInterface } from "../Field/GameSpaceAccessInterface";
import { SettingsConfigurationInterface } from "../Settings/SettingsConfigurationInterface";
import { SquashFieldInterface } from "../SquashField/SquashFieldServiceInterface";
import { TYPES } from "../types";
import { FillFieldServiceInterface } from "./FillFieldServiceInterface";

export class FillVisualFieldService
 implements FillFieldServiceInterface {
    private squashService: SquashFieldInterface
    private cellsPool: CellsPoolInterface
    private gameSpace: GameSpaceAccessInterface
    private settingsConfiguration: SettingsConfigurationInterface

    constructor() {
        this.squashService = container.get(TYPES.squashService)
        this.cellsPool = container.get(TYPES.cellsPool)
        this.gameSpace = container.get(TYPES.gameSpaceAccess)
        this.settingsConfiguration = container.get(TYPES.settingsConfiguration)
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
        
    }
}