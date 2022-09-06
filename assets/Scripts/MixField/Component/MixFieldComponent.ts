import { Component, _decorator } from "cc";
import { container } from "../../container";
import { FieldStorageInterface } from "../../Field/FieldStorageInterface";
import { TYPES } from "../../types";
import { MixFieldInterface } from "../MixFieldInterface";

const {ccclass} = _decorator

@ccclass
export class MixFieldComponent extends Component {
    private fieldStorage: FieldStorageInterface
    private mixField: MixFieldInterface

    start() {
        this.fieldStorage = container.get(TYPES.fieldStorage)
        this.mixField = container.get(TYPES.mixField)
    }

    mixStorageField() {
        this.mixField.mixField(this.fieldStorage.get())
    }
}