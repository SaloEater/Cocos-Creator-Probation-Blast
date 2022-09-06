import { injected } from "saloeater-brandi";
import { EventClass } from "../Event/event";
import { Field } from "../Field/Field";
import { SettingsConfigurationInterface } from "../Settings/SettingsConfigurationInterface";
import { SimilarCellsServiceInterface } from "../SimilarCells/SimilarCellsServiceInterface";
import { TYPES } from "../types";
import { FieldIsUnplayableEvent } from "./Event/FieldIsUnplayableEvent";
import { PlayableFieldInterface } from "./PlayableFieldInterface";

export class PlayableFieldService implements PlayableFieldInterface {
    constructor(
        private similarCellsService: SimilarCellsServiceInterface,
        private settingsConfiguration: SettingsConfigurationInterface,
    ) {
    }

    ensureFieldIsPlayable(field: Field): void {
        if (!this.isSolutionExists(field)) {
            EventClass.emitEvent(new FieldIsUnplayableEvent(field))
        }
    }

    isSolutionExists(field: Field) {
        let solutionExists = false;

        for (let column = 0; column < field.columns; column++) {
            for (let row = 0; row < field.rows; row++) {
                let similarCells = this.similarCellsService.findSimilarCells(
                    field,
                    column,
                    row,
                    field.getCellAt(column, row)
                );

                if (similarCells.length >= this.settingsConfiguration.getMinBurnedAmount() - 1) {
                    solutionExists = true;
                    break;
                }
            }

            if (solutionExists) {
                break;
            }
        }
        return solutionExists;
    }
}

injected(PlayableFieldService, TYPES.similarCellsService.optional, TYPES.settingsConfiguration.optional)