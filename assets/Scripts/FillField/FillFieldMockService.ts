import { injected } from "saloeater-brandi";
import { CellSimple } from "../Cell/CellSimple";
import { Field } from "../Field/Field";
import { SquashFieldInterface } from "../SquashField/SquashFieldServiceInterface";
import { TYPES } from "../types";
import { TEST_TYPES } from "../types_test";
import { FillFieldService } from "./FillFieldService";
import { FillFieldServiceInterface } from "./FillFieldServiceInterface";

export class FillFieldMockService extends FillFieldService {

}

injected(FillFieldMockService, TEST_TYPES.testsSquashFieldService.optional)