import { Component, _decorator } from "cc";
import { CellVisual } from "../Cell/Component/CellVisual";
import { container } from "../container";
import { EventClass } from "../Event/event";
import { InitGameEvent } from "../Event/InitGameEvent";
import { Field } from "../Field/Field";
import { FieldStorageInterface } from "../Field/FieldStorageInterface";
import { FillFieldServiceInterface } from "../FillField/FillFieldServiceInterface";
import { PointsStorageInterface } from "../Points/PointsStorageInterface";
import { SettingsConfigurationInterface } from "../Settings/SettingsConfigurationInterface";
import { TYPES } from "../types";

const {ccclass} = _decorator

@ccclass
export class FakeStartComponent extends Component {
    start() {
        EventClass.emitEvent(new InitGameEvent())
    }
}