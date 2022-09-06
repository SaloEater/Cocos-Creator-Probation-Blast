import { SettingsConfigurationInterface } from "../../Scripts/Settings/SettingsConfigurationInterface"

export class SettingsConfigurationMockService implements SettingsConfigurationInterface {
    getRows(): number {
        return 2
    }

    getColumns(): number {
        return 2
    }

    getCellVariantsAmount(): number {
        return 1
    }

    getMinBurnedAmount(): number {
        return 2
    }

    getShufflesAmount(): number {
        return 1
    }

    getPointsToWin(): number {
        return 1
    }

    getTurnsAmount(): number {
        return 1
    }

    getSuperCellAppearenceAmount(): number {
        return 1
    }

    getCellWidth(): number {
        return 1
    }
    
    getCellHeight(): number {
        return 1
    }
}