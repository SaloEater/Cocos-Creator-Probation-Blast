import { TYPES } from './types';
import { TestsPipeline } from '../Tests/TestsPipeline';
import { Container } from 'saloeater-brandi';
import { SimilarCellsService } from './SimilarCells/SimilarCellsService';
import { GameSpaceService } from './Field/GameSpaceService';
import { SquashFieldService } from './SquashField/SquashFieldService';
import { FillFieldService } from './FillField/FillFieldService';
import { CellPositionCalculationsService } from './Cell/CellPositionCalculationsService';
import { FillVisualFieldService } from './FillField/FillVisualFieldService';
import { FieldStorage } from './Field/FieldStorage';

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

export { container }