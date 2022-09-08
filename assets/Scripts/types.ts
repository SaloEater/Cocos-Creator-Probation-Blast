import { token } from "saloeater-brandi";
import { TestsPipeline } from "../Tests/TestsPipeline";
import { BombCommandInterface } from "./BonusBomb/BombCommandInterface";
import { CellsInRadiusInterface } from "./BonusBomb/CellsInRadiusServiceInterface";
import { CellBurnCommandInterface } from "./BurnCells/CellBurnCommandInterface";
import { CellBurningCountStorageInterface } from "./BurnCells/CellBurningCountStorageInterface";
import { CellBurningServiceInterface } from "./BurnCells/CellBurningServiceInterface";
import { CellBurningEndEventHandler } from "./BurnCells/EventHandler/CellsBurningEndEventHandler";
import { CellBurningStartEventHandler } from "./BurnCells/EventHandler/CellBurningStartEventHandler";
import { DecrementCellBurningStartEventHandler } from "./BurnCells/EventHandler/DecrementCellBurningStartEventHandler";
import { CellActionCommandInterface } from "./Cell/CellActionCommandInterface";
import { CellActionState } from "./Cell/CellActionState";
import { CellPositionCalculationsInterface } from "./Cell/CellPositionCalculationsInterface";
import { CellsPoolInterface } from "./Cell/CellsPoolInterface";
import { CellVisualDestroyCommandInterface } from "./Cell/CellVisualDestroyCommandInterface";
import { CellVisualMoveDownCommandInterface } from "./Cell/CellVisualMoveDownCommandInterface";
import { MoveCellVisualToPositionCommandInterface } from "./Cell/MoveCellVisualToPositionCommandInterface";
import { TurnOffInputEventHandler } from "./CocosCreator/Event/TurnOffInputEventHandler";
import { TurnOnInputEventHandler } from "./CocosCreator/Event/TurnOnInputEventHandler";
import { InputStateInterface } from "./CocosCreator/InputStateInterface";
import { FieldStorageInterface } from "./Field/FieldStorageInterface";
import { GameSpaceAccessInterface } from "./Field/GameSpaceAccessInterface";
import { GameSpaceServiceInterface } from "./Field/GameSpaceServiceInterface";
import { FillFieldServiceInterface } from "./FillField/FillFieldServiceInterface";
import { CheckGameEndEventHandler } from "./GameEnd/Event/CheckGameEndEventHandler";
import { GameSceneDirectorInterface } from "./GameEnd/GameSceneDirectorInterface";
import { GameStateInterface } from "./GameEnd/GameStateInterface";
import { DecrementShufflesEventHandler } from "./MixField/Event/DecrementShufflesEventHandler";
import { MixFieldInterface } from "./MixField/MixFieldInterface";
import { PlayableFieldInterface } from "./PlayableField/PlayableFieldInterface";
import { PointsStorageInterface } from "./Points/PointsStorageInterface";
import { SettingsConfigurationInterface } from "./Settings/SettingsConfigurationInterface";
import { SimilarCellsServiceInterface } from "./SimilarCells/SimilarCellsServiceInterface";
import { SquashFieldInterface } from "./SquashField/SquashFieldServiceInterface";
import { TurnsLeftDecrementEventHandler } from "./TurnsLeft/Event/TurnsLeftDecrementEventHandler";
import { SwapStorage } from "./BonusSwap/SwapStorage";
import { ResetSwapStorageEventHandler } from "./BonusSwap/Event/ResetSwapStorageEventHandler";
import { SwapCommandInterface } from "./BonusSwap/SwapCommandInterface";
import { CellSuperPoolInterface } from "./CellSuper/CellSuperPoolInterface";
import { SameRowCellsService } from "./CellSuper/SameRowCellsService";
import { BurnRowCommand } from "./CellSuper/BurnRowCommand";
import { BurnColumnCommand } from "./CellSuper/BurnColumnCommand";
import { SameColumnCellsService } from "./CellSuper/SameColumnCellsService";
import { BurnFieldCommand } from "./CellSuper/BurnFieldCommand";
import { CellSuperSpawnService } from "./CellSuper/CellSuperSpawnService";
import { CellSuperLocationStorage } from "./CellSuper/CellSuperLocationStorage";
import { CellSuperLocationInitialzeEventHandler } from "./CellSuper/Event/CellSuperLocationInitialzeEventHandler";
import { CellVisualInstanceService } from "./Cell/CellVisualInstanceService";
import { ClearStorageFieldEventHandler } from "./Field/Event/ClearStorageFieldEventHandler";
import { InitShuffleStorageEventHandler } from "./MixField/Event/InitShuffleStorageEventHandler";
import { InitTurnsStorageEventHandler } from "./TurnsLeft/Event/InitTurnsStorageEventHandler";
import { InitFieldStorageEventHandler } from "./Field/Event/InitFieldStorageEventHandler";
import { InitFieldFillEventHandler } from "./FillField/Event/InitFieldFillEventHandler";

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
    inputState: token<InputStateInterface>('inputState'),
    eventHandlerTurnOffInputState: token<TurnOffInputEventHandler>('eventHandlerTurnOffInputState'),
    eventHandlerTurnOnInputState: token<TurnOnInputEventHandler>('eventHandlerTurnOnInputState'),
    mixField: token<MixFieldInterface>('mixField'),
    pointsStorage: token<PointsStorageInterface>('pointsStorage'),
    shufflesStorage: token<PointsStorageInterface>('shufflesStorage'),
    playableField: token<PlayableFieldInterface>('playableField'),
    eventHandlerDecrementShuffles: token<DecrementShufflesEventHandler>('eventHandlerDecrementShuffles'),
    turnsLeftStorage: token<PointsStorageInterface>('turnsLeftStorage'),
    eventHandlerDecrementTurns: token<TurnsLeftDecrementEventHandler>('eventHandlerDecrementTurns'),
    gameState: token<GameStateInterface>('gameState'),
    gameSceneDirector: token<GameSceneDirectorInterface>('gameSceneDirector'),
    cellActionCommand: token<CellActionCommandInterface>('cellActionCommand'),
    cellActionState: token<CellActionState>('cellActionState'),
    bombCommand: token<BombCommandInterface>('bombCommand'),
    cellsInRadius: token<CellsInRadiusInterface>('cellsInRadius'),
    swapStorage: token<SwapStorage>('swapStorage'),
    eventHandlerResetSwapStorage: token<ResetSwapStorageEventHandler>('eventHandlerResetSwapStorage'),
    swapCommand: token<SwapCommandInterface>('swapCommand'),
    cellSuperPool: token<CellSuperPoolInterface>('cellSuperPool'),
    sameRowCellsService: token<SameRowCellsService>('sameRowCellsService'),
    burnRowCommand: token<BurnRowCommand>('burnRowCommand'),
    sameColumnCellsService: token<SameColumnCellsService>('sameColumnCellsService'),
    burnColumnCommand: token<BurnColumnCommand>('burnColumnCommand'),
    burnFieldCommand: token<BurnFieldCommand>('burnFieldCommand'),
    cellSuperSpawnService: token<CellSuperSpawnService>('cellSuperSpawnService'),
    cellSuperLocationStorage: token<CellSuperLocationStorage>('cellSuperLocationStorage'),
    eventHandlerCellSuperLocationInitialze: token<CellSuperLocationInitialzeEventHandler>('eventHandlerCellSuperLocationInitialze'),
    cellVisualInstanceService: token<CellVisualInstanceService>('cellVisualInstanceService'),
    eventHandlerClearStorageField: token<ClearStorageFieldEventHandler>('eventHandlerClearStorageField'),
    eventHandlerInitShuffleStorage: token<InitShuffleStorageEventHandler>('eventHandlerInitShuffleStorage'),
    eventHandlerInitTurnsStorage: token<InitTurnsStorageEventHandler>('eventHandlerInitTurnsStorage'),
    eventHandlerInitFieldStorage: token<InitFieldStorageEventHandler>('eventHandlerInitFieldStorage'),
    eventHandlerInitFieldFill: token<InitFieldFillEventHandler>('eventHandlerInitFieldFill'),
};

export { TYPES };