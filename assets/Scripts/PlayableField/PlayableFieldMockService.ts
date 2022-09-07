import { injected } from "saloeater-brandi";
import { TEST_TYPES } from "../types_test";
import { PlayableFieldService } from "./PlayableFieldService";

export class PlayableFieldMockService extends PlayableFieldService {
    
}

injected(
    PlayableFieldMockService,
    TEST_TYPES.testsSimilarCellsService.optional,
    TEST_TYPES.testsSettingsConfiguration.optional,
)