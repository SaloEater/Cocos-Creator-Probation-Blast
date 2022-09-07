import { injected } from "saloeater-brandi";
import { container } from "../../container";
import { EventHandlerInterface } from "../../Event/EventHandlerInterface";
import { TYPES } from "../../types";
import { GameSceneDirectorInterface } from "../GameSceneDirectorInterface";
import { GameStateInterface } from "../GameStateInterface";

export class CheckGameEndEventHandler implements EventHandlerInterface {
    private gameState: GameStateInterface
    private gameSceneDirector: GameSceneDirectorInterface
    private a: number

    constructor() {
        this.a = 1
    }

    handle() {
        this.initDI()
        if (this.gameState.isGameWon()) {
            this.gameSceneDirector.setWinScene()
        }

        if (this.gameState.isGameLost()) {
            this.gameSceneDirector.setLoseScene()
        }
    }

    initDI() {
        if (!this.gameState) {
            this.gameState = container.get(TYPES.gameState)
        }

        if (!this.gameSceneDirector) {
            this.gameSceneDirector = container.get(TYPES.gameSceneDirector)
        }
    }
}