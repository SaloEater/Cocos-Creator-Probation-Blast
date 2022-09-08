import { TYPES } from './types';
import { TestsPipeline } from '../Tests/TestsPipeline';
import { Container, injected } from 'saloeater-brandi';
import { SimilarCellsService } from './SimilarCells/SimilarCellsService';
import { GameSpaceService } from './Field/GameSpaceService';
import { SquashFieldService } from './SquashField/SquashFieldService';
import { FieldStorage } from './Field/FieldStorage';
import { FillVisualFieldService } from './FillField/FillVisualFieldService';
import { CellPositionCalculationsService } from './Cell/CellPositionCalculationsService';
import { CellBurnCommand } from './BurnCells/CellBurnCommand';
import { VisualCellBurningService } from './BurnCells/CellVisualBurning';
import { TestsLogComponent } from './Tests/Component/TestsLogComponent';
import { CellVisualDestroyCommand } from './Cell/CellVisualDestroyCommand';
import { CellBurningCountStorage } from './BurnCells/CellBurningCountStorage';
import { CellBurningStartEventHandler } from './BurnCells/EventHandler/CellBurningStartEventHandler';
import { DecrementCellBurningStartEventHandler } from './BurnCells/EventHandler/DecrementCellBurningStartEventHandler';
import { CellVisualMoveDownCommand } from './Cell/CellVisualMoveDownCommand';
import { SquashVisualFieldService } from './SquashField/SquashVisualFieldService';
import { MoveCellVisualToPositionCommand } from './Cell/MoveCellVisualToPositionCommand';
import { InputState } from './CocosCreator/InputState';
import { TurnOffInputEventHandler } from './CocosCreator/Event/TurnOffInputEventHandler';
import { TurnOnInputEventHandler } from './CocosCreator/Event/TurnOnInputEventHandler';
import { MixField } from './MixField/MixField';
import { PointsStorage } from './Points/PointsStorage';
import { PlayableFieldService } from './PlayableField/PlayableFieldService';
import { DecrementShufflesEventHandler } from './MixField/Event/DecrementShufflesEventHandler';
import { TurnsLeftDecrementEventHandler } from './TurnsLeft/Event/TurnsLeftDecrementEventHandler';
import { GameStateService } from './GameEnd/GameStateService';
import { CheckGameEndEventHandler } from './GameEnd/Event/CheckGameEndEventHandler';
import { CellActionCommand } from './Cell/CellActionCommand';
import { CellActionState } from './Cell/CellActionState';
import { BombCommand } from './BonusBomb/BombCommand';
import { CellsInRadiusService } from './BonusBomb/CellsInRadiusService';
import { SwapStorage } from './BonusSwap/SwapStorage';
import { ResetSwapStorageEventHandler } from './BonusSwap/Event/ResetSwapStorageEventHandler';
import { SwapCommand } from './BonusSwap/SwapCommand';
import { SameRowCellsService } from './CellSuper/SameRowCellsService';
import { BurnRowCommand } from './CellSuper/BurnRowCommand';
import { SameColumnCellsService } from './CellSuper/SameColumnCellsService';
import { BurnColumnCommand } from './CellSuper/BurnColumnCommand';
import { BurnFieldCommand } from './CellSuper/BurnFieldCommand';
import { CellSuperSpawnService } from './CellSuper/CellSuperSpawnService';
import { CellSuperLocationStorage } from './CellSuper/CellSuperLocationStorage';
import { CellVisualInstanceService } from './Cell/CellVisualInstanceService';
import { CellSuperLocationInitialzeEventHandler } from './CellSuper/Event/CellSuperLocationInitialzeEventHandler';
import { ClearStorageFieldEventHandler } from './Field/Event/ClearStorageFieldEventHandler';
import { InitShuffleStorageEventHandler } from './MixField/Event/InitShuffleStorageEventHandler';
import { InitTurnsStorageEventHandler } from './TurnsLeft/Event/InitTurnsStorageEventHandler';
import { InitFieldStorageEventHandler } from './Field/Event/InitFieldStorageEventHandler';
import { InitFieldFillEventHandler } from './FillField/Event/InitFieldFillEventHandler';

const container = new Container();

container
    .bind(TYPES.testsPipeline)
    .toInstance(TestsPipeline)
    .inContainerScope()

container
    .bind(TYPES.similarCellsService)
    .toInstance(SimilarCellsService)
    .inContainerScope()

container
    .bind(TYPES.gameSpaceService)
    .toInstance(GameSpaceService)
    .inResolutionScope()

container
    .bind(TYPES.cellPositionCalculations)
    .toInstance(CellPositionCalculationsService)
    .inResolutionScope()       

container
    .bind(TYPES.squashService)
    .toInstance(SquashVisualFieldService)
    .inResolutionScope()

container
    .bind(TYPES.fillFieldService)
    .toInstance(FillVisualFieldService)
    .inResolutionScope()
    
container
    .bind(TYPES.fieldStorage)
    .toInstance(FieldStorage)
    .inContainerScope()
    
container
    .bind(TYPES.cellBurningService)
    .toInstance(VisualCellBurningService)
    .inContainerScope()
    
container
    .bind(TYPES.cellBurnCommand)
    .toInstance(CellBurnCommand)
    .inContainerScope()

container
    .bind(TYPES.cellVisualDestroyCommand)
    .toInstance(CellVisualDestroyCommand)
    .inContainerScope()

container
    .bind(TYPES.cellBurningCountStorage)
    .toInstance(CellBurningCountStorage)
    .inContainerScope()

container
    .bind(TYPES.eventHandlerCellBurningStart)
    .toInstance(CellBurningStartEventHandler)
    .inContainerScope()

container
    .bind(TYPES.eventHandlerDecrementCellBurningStart)
    .toInstance(DecrementCellBurningStartEventHandler)
    .inContainerScope()

container
    .bind(TYPES.cellVisualMoveDownCommand)
    .toInstance(CellVisualMoveDownCommand)
    .inResolutionScope()

container
    .bind(TYPES.moveCellVisualToPositionCommand)
    .toInstance(MoveCellVisualToPositionCommand)
    .inResolutionScope()

container
    .bind(TYPES.inputState)
    .toInstance(InputState)
    .inContainerScope()

container
    .bind(TYPES.eventHandlerTurnOffInputState)
    .toInstance(TurnOffInputEventHandler)
    .inContainerScope()

container
    .bind(TYPES.eventHandlerTurnOnInputState)
    .toInstance(TurnOnInputEventHandler)
    .inContainerScope()

container
    .bind(TYPES.mixField)
    .toInstance(MixField)
    .inContainerScope()

container
    .bind(TYPES.pointsStorage)
    .toInstance(PointsStorage)
    .inContainerScope()

container
    .bind(TYPES.shufflesStorage)
    .toInstance(PointsStorage)
    .inContainerScope()

container
    .bind(TYPES.playableField)
    .toInstance(PlayableFieldService)
    .inResolutionScope()

container
    .bind(TYPES.eventHandlerDecrementShuffles)
    .toInstance(DecrementShufflesEventHandler)
    .inContainerScope()

container
    .bind(TYPES.turnsLeftStorage)
    .toInstance(PointsStorage)
    .inContainerScope()

container
    .bind(TYPES.eventHandlerDecrementTurns)
    .toInstance(TurnsLeftDecrementEventHandler)
    .inContainerScope()

container
    .bind(TYPES.gameState)
    .toInstance(GameStateService)
    .inContainerScope()

container
    .bind(TYPES.cellActionCommand)
    .toInstance(CellActionCommand)
    .inContainerScope()

container
    .bind(TYPES.cellActionState)
    .toInstance(CellActionState)
    .inContainerScope()

container
    .bind(TYPES.bombCommand)
    .toInstance(BombCommand)
    .inContainerScope()

container
    .bind(TYPES.cellsInRadius)
    .toInstance(CellsInRadiusService)
    .inContainerScope()

container
    .bind(TYPES.swapStorage)
    .toInstance(SwapStorage)
    .inContainerScope()

container
    .bind(TYPES.eventHandlerResetSwapStorage)
    .toInstance(ResetSwapStorageEventHandler)
    .inContainerScope()

container
    .bind(TYPES.swapCommand)
    .toInstance(SwapCommand)
    .inContainerScope()

container
    .bind(TYPES.sameRowCellsService)
    .toInstance(SameRowCellsService)
    .inContainerScope()

container
    .bind(TYPES.burnRowCommand)
    .toInstance(BurnRowCommand)
    .inContainerScope()

container
    .bind(TYPES.sameColumnCellsService)
    .toInstance(SameColumnCellsService)
    .inContainerScope()

container
    .bind(TYPES.burnColumnCommand)
    .toInstance(BurnColumnCommand)
    .inContainerScope()

container
    .bind(TYPES.burnFieldCommand)
    .toInstance(BurnFieldCommand)
    .inContainerScope()

container
    .bind(TYPES.cellSuperSpawnService)
    .toInstance(CellSuperSpawnService)
    .inContainerScope()

container
    .bind(TYPES.cellSuperLocationStorage)
    .toInstance(CellSuperLocationStorage)
    .inContainerScope()

container
    .bind(TYPES.eventHandlerCellSuperLocationInitialze)
    .toInstance(CellSuperLocationInitialzeEventHandler)
    .inContainerScope()

container
    .bind(TYPES.cellVisualInstanceService)
    .toInstance(CellVisualInstanceService)
    .inContainerScope()

container
    .bind(TYPES.eventHandlerClearStorageField)
    .toInstance(ClearStorageFieldEventHandler)
    .inContainerScope()

container
    .bind(TYPES.eventHandlerInitShuffleStorage)
    .toInstance(InitShuffleStorageEventHandler)
    .inContainerScope()

container
    .bind(TYPES.eventHandlerInitTurnsStorage)
    .toInstance(InitTurnsStorageEventHandler)
    .inContainerScope()

container
    .bind(TYPES.eventHandlerInitFieldStorage)
    .toInstance(InitFieldStorageEventHandler)
    .inContainerScope()

container
    .bind(TYPES.eventHandlerInitFieldFill)
    .toInstance(InitFieldFillEventHandler)
    .inContainerScope()

export { container }