import { CellEmpty } from "../../Scripts/Cell/CellEmpty";
import { CellBurningServiceInterface } from "../../Scripts/BurnCells/CellBurningServiceInterface";
import { Field } from "../../Scripts/Field/Field";
import { SimilarCellsServiceInterface } from "../../Scripts/SimilarCells/SimilarCellsServiceInterface";
import { TYPES } from "../../Scripts/types";
import { CellInterface } from "../../Scripts/Cell/CellInterface";
import { injected } from "saloeater-brandi";
import { EventTarget } from "cc";
import { EVENT_TYPES } from "../../Scripts/event_types";
import { EventClass } from "../../Scripts/Event/event";
import { CellsBurnStartEvent } from "../../Scripts/BurnCells/Event/CellsBurnStartEvent";
import { CellBurningService } from "../../Scripts/BurnCells/CellBurningService";
import { TEST_TYPES } from "../../Scripts/types_test";

export class CellBurningMockService extends CellBurningService {
    protected emitEvent(length: number): void {
        return;
    }
}

injected(CellBurningMockService, TEST_TYPES.testsSimilarCellsService.optional)