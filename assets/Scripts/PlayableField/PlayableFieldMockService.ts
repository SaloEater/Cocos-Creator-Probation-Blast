import { injected } from "saloeater-brandi";
import { EventClass } from "../Event/event";
import { Field } from "../Field/Field";
import { SettingsConfigurationInterface } from "../Settings/SettingsConfigurationInterface";
import { SimilarCellsServiceInterface } from "../SimilarCells/SimilarCellsServiceInterface";
import { TYPES } from "../types";
import { TEST_TYPES } from "../types_test";
import { FieldIsUnplayableEvent } from "./Event/FieldIsUnplayableEvent";
import { PlayableFieldInterface } from "./PlayableFieldInterface";
import { PlayableFieldService } from "./PlayableFieldService";

export class PlayableFieldMockService extends PlayableFieldService {
    
}

injected(
    PlayableFieldMockService,
    TEST_TYPES.testsSimilarCellsService.optional,
    TEST_TYPES.testsSettingsConfiguration.optional
)