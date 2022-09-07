import { injected } from "saloeater-brandi";
import { CellBurningCountStorageInterface } from "../../BurnCells/CellBurningCountStorageInterface";
import { container } from "../../container";
import { EventHandlerInterface } from "../../Event/EventHandlerInterface";
import { SettingsConfigurationInterface } from "../../Settings/SettingsConfigurationInterface";
import { TYPES } from "../../types";
import { CellSuperLocationStorage } from "../CellSuperLocationStorage";
import { CellSuperSpawnService } from "../CellSuperSpawnService";

export class CellSuperSpawnEventHandler implements EventHandlerInterface{
    private countStorage: CellBurningCountStorageInterface
    private settingsConfiguration: SettingsConfigurationInterface
    private cellSuperSpawnService: CellSuperSpawnService
    private cellSuperLocationStorage: CellSuperLocationStorage

    handle() {
        this.initDI()
        if (this.settingsConfiguration.getSuperCellAppearenceAmount() <= this.countStorage.getInitialCount()) {
            this.cellSuperSpawnService.createSuperCell(
                this.cellSuperLocationStorage.field,
                this.cellSuperLocationStorage.column,
                this.cellSuperLocationStorage.row,
            )
        }
    }

    initDI() {
        if (!this.countStorage) {
            this.countStorage = container.get(TYPES.cellBurningCountStorage)
        }

        if (!this.settingsConfiguration) {
            this.settingsConfiguration = container.get(TYPES.settingsConfiguration)
        }

        if (!this.cellSuperSpawnService) {
            this.cellSuperSpawnService = container.get(TYPES.cellSuperSpawnService)
        }
        
        if (!this.cellSuperLocationStorage) {
            this.cellSuperLocationStorage = container.get(TYPES.cellSuperLocationStorage)
        }
    }
}