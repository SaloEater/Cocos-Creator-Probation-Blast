import { Field } from "../Field/Field";

export interface PlayableFieldInterface {
    ensureFieldIsPlayable(field: Field): void
}