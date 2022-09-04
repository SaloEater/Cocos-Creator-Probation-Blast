import { Node, UITransform } from "cc";
import { GameSpaceServiceInterface } from "./GameSpaceServiceInterface";

export class GameSpaceService implements GameSpaceServiceInterface {
    getWidth(gameSpace: Node): number {
        return gameSpace.getComponent(UITransform).width
    }
    getHeight(gameSpace: Node): number {
        return gameSpace.getComponent(UITransform).height
    }

}