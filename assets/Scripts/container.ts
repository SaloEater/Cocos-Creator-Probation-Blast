import { TYPES } from './types';
import { TestsPipeline } from '../Tests/TestsPipeline';
import { Container } from 'saloeater-brandi';
import { SimilarCellsService } from './SimilarCells/SimilarCellsService';
import { GameSpaceService } from './Field/GameSpaceService';
import { SquashFieldService } from './SquashField/SquashFieldService';
import { FieldStorage } from './Field/FieldStorage';
import { CellBurningService } from './BurnCells/CellBurningService';
import { FillVisualFieldService } from './FillField/FillVisualFieldService';
import { CellPositionCalculationsService } from './Cell/CellPositionCalculationsService';
import { CellBurnCommand } from './BurnCells/CellBurnCommand';
import { VisualCellBurningService } from './BurnCells/CellVisualBurning';

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
    .inContainerScope()

container
    .bind(TYPES.squashService)
    .toInstance(SquashFieldService)
    .inContainerScope()

container
    .bind(TYPES.fillFieldService)
    .toInstance(FillVisualFieldService)
    .inContainerScope()

container
    .bind(TYPES.cellPositionCalculations)
    .toInstance(CellPositionCalculationsService)
    .inContainerScope()

container
    .bind(TYPES.fieldStorage)
    .toInstance(FieldStorage)
    .inContainerScope()
    
container
    .bind(TYPES.cellBurningService)
    .toInstance(VisualCellBurningService)
    .inContainerScope()
    
// container
//     .bind(TYPES.cellBurnCommand)
//     .toInstance(CellBurnCommand)
//     .inContainerScope()

export { container }