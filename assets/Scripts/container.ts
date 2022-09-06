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
import { CellBurningEndEventHandler } from './BurnCells/EventHandler/CellBurningEndEventHandler';
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

const container = new Container();

container
    .bind(TYPES.testsPipeline)
    .toInstance(TestsPipeline)
    .inSingletonScope()

container
    .bind(TYPES.similarCellsService)
    .toInstance(SimilarCellsService)
    .inSingletonScope()

container
    .bind(TYPES.gameSpaceService)
    .toInstance(GameSpaceService)
    .inSingletonScope()

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
    .inSingletonScope()
    
container
    .bind(TYPES.fieldStorage)
    .toInstance(FieldStorage)
    .inSingletonScope()
    
container
    .bind(TYPES.cellBurningService)
    .toInstance(VisualCellBurningService)
    .inSingletonScope()
    
container
    .bind(TYPES.cellBurnCommand)
    .toInstance(CellBurnCommand)
    .inSingletonScope()

container
    .bind(TYPES.cellVisualDestroyCommand)
    .toInstance(CellVisualDestroyCommand)
    .inSingletonScope()

container
    .bind(TYPES.cellBurningCountStorage)
    .toInstance(CellBurningCountStorage)
    .inSingletonScope()

container
    .bind(TYPES.eventHandlerCellBurningStart)
    .toInstance(CellBurningStartEventHandler)
    .inSingletonScope()

container
    .bind(TYPES.eventHandlerDecrementCellBurningStart)
    .toInstance(DecrementCellBurningStartEventHandler)
    .inSingletonScope()

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
    .inSingletonScope()

container
    .bind(TYPES.eventTurnOffInputState)
    .toInstance(TurnOffInputEventHandler)
    .inSingletonScope()

container
    .bind(TYPES.eventTurnOnInputState)
    .toInstance(TurnOnInputEventHandler)
    .inSingletonScope()

container
    .bind(TYPES.mixField)
    .toInstance(MixField)
    .inSingletonScope()

container
    .bind(TYPES.pointsStorage)
    .toInstance(PointsStorage)
    .inSingletonScope()

container
    .bind(TYPES.playableField)
    .toInstance(PlayableFieldService)
    .inResolutionScope()

export { container }