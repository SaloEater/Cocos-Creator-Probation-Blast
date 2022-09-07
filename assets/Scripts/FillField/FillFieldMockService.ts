import { injected } from "saloeater-brandi";
import { TEST_TYPES } from "../types_test";
import { FillFieldService } from "./FillFieldService";

export class FillFieldMockService extends FillFieldService {

}

injected(FillFieldMockService, TEST_TYPES.testsSquashFieldService.optional)