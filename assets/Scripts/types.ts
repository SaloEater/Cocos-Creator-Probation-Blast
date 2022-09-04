import { token } from "saloeater-brandi";
import { TestsPipeline } from "../Tests/TestsPipeline";
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
};

export { TYPES };