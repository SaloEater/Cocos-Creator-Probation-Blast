import { Node } from "cc"

export interface GameSpaceServiceInterface {
    getWidth(gameSpace: Node): number
    getHeight(gameSpace: Node): number
}