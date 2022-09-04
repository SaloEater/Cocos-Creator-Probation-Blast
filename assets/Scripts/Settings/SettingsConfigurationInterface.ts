export interface SettingsConfigurationInterface {
    getRows(): number
    getColumns(): number
    getCellVariantsAmount(): number
    getMinBurnedAmount(): number
    getShufflesAmount(): number
    getPointsToWin(): number
    getTurnsAmount(): number
    getSuperCellAppearenceAmount(): number
    getCellWidth(): number
    getCellHeight(): number
}