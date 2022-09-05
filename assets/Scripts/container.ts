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
    .bind(TYPES.squashService)
    .toInstance(SquashFieldService)
    .inSingletonScope()

container
    .bind(TYPES.fillFieldService)
    .toInstance(FillVisualFieldService)
    .inSingletonScope()

container
    .bind(TYPES.cellPositionCalculations)
    .toInstance(CellPositionCalculationsService)
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

export { container }