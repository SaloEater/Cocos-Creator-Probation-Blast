import { CellBurnCommandTest } from "./CellBurnCommandTest"
import CellBurningServiceTest from "./CellBurningServiceTest"
import { CellPositionCalculationsServiceTest } from "./CellPositionCalculationsServiceTest"
import FieldColumnTest from "./FieldColumnTest"
import FieldTest from "./FieldTest"
import { FillFieldServiceTest } from "./FillFieldServiceTest"
import SimilarCellsServiceTest from "./SimilarCellsServiceTest"
import SquashFieldServiceTest from "./SquashFieldServiceTest"

export default [
    FieldTest,
    FieldColumnTest,
    SquashFieldServiceTest,
    SimilarCellsServiceTest,
    CellBurningServiceTest,
    FillFieldServiceTest,
    CellPositionCalculationsServiceTest,
    CellBurnCommandTest,
]