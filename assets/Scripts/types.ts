import { token } from "saloeater-brandi";
import { TestsPipeline } from "../Tests/TestsPipeline";
import { CellBurnCommandInterface } from "./BurnCells/CellBurnCommandInterface";
import { CellBurningCountStorageInterface } from "./BurnCells/CellBurningCountStorageInterface";
import { CellBurningServiceInterface } from "./BurnCells/CellBurningServiceInterface";
import { CellBurningEndEventHandler } from "./BurnCells/EventHandler/CellBurningEndEventHandler";
import { CellBurningStartEventHandler } from "./BurnCells/EventHandler/CellBurningStartEventHandler";
import { DecrementCellBurningStartEventHandler } from "./BurnCells/EventHandler/DecrementCellBurningStartEventHandler";
import { CellPositionCalculationsInterface } from "./Cell/CellPositionCalculationsInterface";
import { CellsPoolInterface } from "./Cell/CellsPoolInterface";
import { CellVisualDestroyCommandInterface } from "./Cell/CellVisualDestroyCommandInterface";
import { CellVisualMoveDownCommandInterface } from "./Cell/CellVisualMoveDownCommandInterface";
import { MoveCellVisualToPositionCommandInterface } from "./Cell/MoveCellVisualToPositionCommandInterface";
import { FieldStorageInterface } from "./Field/FieldStorageInterface";
import { GameSpaceAccessInterface } from "./Field/GameSpaceAccessInterface";
import { GameSpaceServiceInterface } from "./Field/GameSpaceServiceInterface";
import { FillFieldServiceInterface } from "./FillField/FillFieldServiceInterface";
import { SettingsConfigurationInterface } from "./Settings/SettingsConfigurationInterface";
import { SimilarCellsServiceInterface } from "./SimilarCells/SimilarCellsServiceInterface";
import { SquashFieldInterface } from "./SquashField/SquashFieldServiceInterface";

const TYPES = {
    testsPipeline: token<TestsPipeline>('testsPipeline'),
    similarCellsService: token<SimilarCellsServiceInterface>('similarCellsService'),
    settingsConfiguration: token<SettingsConfigurationInterface>('settingsConfiguration'),
    gameSpaceAccess: token<GameSpaceAccessInterface>('gameSpaceAccess'),
    gameSpaceService: token<GameSpaceServiceInterface>('gameSpaceService'),
    squashService: token<SquashFieldInterface>('squashService'),
    fillFieldService: token<FillFieldServiceInterface>('fillFieldService'),
    cellsPool: token<CellsPoolInterface>('cellsPool'),
    cellPositionCalculations: token<CellPositionCalculationsInterface>('cellPositionCalculations'),
    fieldStorage: token<FieldStorageInterface>('fieldStorage'),
    cellBurningService: token<CellBurningServiceInterface>('cellBurningService'),
    cellBurnCommand: token<CellBurnCommandInterface>('cellBurnCommand'),
    cellVisualDestroyCommand: token<CellVisualDestroyCommandInterface>('cellVisualDestroyCommand'),
    cellBurningCountStorage: token<CellBurningCountStorageInterface>('cellBurningCountStorage'),
    eventHandlerCellBurningStart: token<CellBurningStartEventHandler>('eventHandlerCellBurningStart'),
    eventHandlerDecrementCellBurningStart: token<DecrementCellBurningStartEventHandler>('eventHandlerDecrementCellBurningStart'),
    cellVisualMoveDownCommand: token<CellVisualMoveDownCommandInterface>('cellVisualMoveDownCommand'),
    moveCellVisualToPositionCommand: token<MoveCellVisualToPositionCommandInterface>('moveCellVisualToPositionCommand'),
};

export { TYPES };