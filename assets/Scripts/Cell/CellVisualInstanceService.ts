import { instantiate, Node, Prefab, Size, UITransform } from "cc";
import { injected } from "saloeater-brandi";
import { GameSpaceAccessInterface } from "../Field/GameSpaceAccessInterface";
import { SettingsConfigurationInterface } from "../Settings/SettingsConfigurationInterface";
import { TYPES } from "../types";
import { CellVisual } from "./Component/CellVisual";

export class CellVisualInstanceService {
    constructor(
        private gameSpace: GameSpaceAccessInterface,
        private settingsConfiguration: SettingsConfigurationInterface,
    ) {
    }

    instantiate(cellPrefab: Prefab): Node {
        let cellNode = instantiate(cellPrefab)
        this.gameSpace.getGameSpace().addChild(cellNode)

        let uiTransform = cellNode.getComponent(UITransform)
        uiTransform.setContentSize(new Size(
            this.settingsConfiguration.getCellWidth(),
            this.settingsConfiguration.getCellHeight(),
        ))

        return cellNode
    }
}

injected(
    CellVisualInstanceService,
    TYPES.gameSpaceAccess.optional,
    TYPES.settingsConfiguration.optional,
)