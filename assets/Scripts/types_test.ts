import { token } from "saloeater-brandi";
import { SettingsConfigurationMockService } from "../Tests/Mock/SettingsConfigurationMockService";
import { CellBurnCommand } from "./BurnCells/CellBurnCommand";
import { CellBurningService } from "./BurnCells/CellBurningService";
import { CellPositionCalculationsService } from "./Cell/CellPositionCalculationsService";
import { FieldStorage } from "./Field/FieldStorage";
import { FillFieldService } from "./FillField/FillFieldService";
import { SimilarCellsService } from "./SimilarCells/SimilarCellsService";
import { SquashFieldService } from "./SquashField/SquashFieldService";

const TEST_TYPES = {
    testsSquashFieldService: token<SquashFieldService>('testsSquashFieldService'),
    testsSimilarCellsService: token<SimilarCellsService>('testsSimilarCellsService'),
    testsCellBurningService: token<CellBurningService>('testsCellBurningService'),
    testsFillFieldService: token<FillFieldService>('testsFillFieldService'),
    testsSettingsConfiguration: token<SettingsConfigurationMockService>('testsSettingsConfiguration'),
    testsCellPositionCalculations: token<CellPositionCalculationsService>('testsCellPositionCalculations'),
    testCellBurnCommand: token<CellBurnCommand>('testCellBurnCommand'),
    testsFieldStorage: token<FieldStorage>('testsFieldStorage'),
};

export { TEST_TYPES };