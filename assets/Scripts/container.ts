import { TYPES } from './types';
import { TestsPipeline } from '../Tests/TestsPipeline';
import { Container } from 'saloeater-brandi';
import { SimilarCellsService } from './SimilarCells/SimilarCellsService';
import { GameSpaceService } from './Field/GameSpaceService';

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

export { container }