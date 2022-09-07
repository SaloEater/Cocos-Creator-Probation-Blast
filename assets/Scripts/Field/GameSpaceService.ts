import { Node, UITransform } from "cc";
import { GameSpaceServiceInterface } from "./GameSpaceServiceInterface";

export class GameSpaceService implements GameSpaceServiceInterface {
    private a: number
    constructor() {
        this.a = 1 // Манипуляция чтобы контейнер смог создать объект без new
    }

    getWidth(gameSpace: Node): number {
        return gameSpace.getComponent(UITransform).width
    }
    getHeight(gameSpace: Node): number {
        return gameSpace.getComponent(UITransform).height
    }

}