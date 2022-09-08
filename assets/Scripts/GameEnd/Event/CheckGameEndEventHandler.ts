import { InputStateInterface } from "../../CocosCreator/InputStateInterface";
import { container } from "../../container";
import { EventHandlerInterface } from "../../Event/EventHandlerInterface";
import { TYPES } from "../../types";
import { GameSceneDirectorInterface } from "../GameSceneDirectorInterface";
import { GameStateInterface } from "../GameStateInterface";

export class CheckGameEndEventHandler implements EventHandlerInterface {
    private gameState: GameStateInterface
    private gameSceneDirector: GameSceneDirectorInterface
    private inputState: InputStateInterface

    private a: number

    constructor() {
        this.a = 1
    }

    handle() {
        this.initDI()
        if (this.gameState.isGameWon()) {
            this.inputState.turnOff()
            setTimeout(() => this.gameSceneDirector.setWinScene(), 750)
        }

        if (this.gameState.isGameLost()) {
            this.inputState.turnOff()
            setTimeout(() => this.gameSceneDirector.setLoseScene(), 750)
        }
    }

    initDI() {
        if (!this.gameState) {
            this.gameState = container.get(TYPES.gameState)
        }

        if (!this.gameSceneDirector) {
            this.gameSceneDirector = container.get(TYPES.gameSceneDirector)
        }

        if (!this.inputState) {
            this.inputState = container.get(TYPES.inputState)
        }
    }
}