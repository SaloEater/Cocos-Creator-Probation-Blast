import { _decorator, Component, ProgressBar } from "cc";
import { container } from "../../container";
import { SettingsConfigurationInterface } from "../../Settings/SettingsConfigurationInterface";
import { TYPES } from "../../types";
import { PointsStorageInterface } from "../PointsStorageInterface";

const {ccclass, property} = _decorator

@ccclass
export class ProgressVisualiseComponent extends Component {
    pointsStorage: PointsStorageInterface
    settingsConfiguration: SettingsConfigurationInterface
    
    @property(ProgressBar)
    progressBar: ProgressBar

    start() {
        this.pointsStorage = container.get(TYPES.pointsStorage)
    }

    update() {
        this.initDI()
        this.progressBar.progress = Math.min(
            this.pointsStorage.get() / this.settingsConfiguration.getPointsToWin(),
            1
        )
    }

    initDI() {
        if (!this.settingsConfiguration) {
            this.settingsConfiguration = container.get(TYPES.settingsConfiguration)
        }
    }
}