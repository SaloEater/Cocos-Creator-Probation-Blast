import { Component, _decorator, Node } from "cc";
import { container } from "../../container";
import { TYPES } from "../../types";
import { GameSpaceAccessInterface } from "../GameSpaceAccessInterface";

const {ccclass, property} = _decorator

@ccclass
export class GameSpaceAccessComponent
 extends Component implements GameSpaceAccessInterface
{
    @property(Node)
    gameSpace: Node

    onLoad() {
        container.bind(TYPES.gameSpaceAccess).toConstant(this)
    }

    getGameSpace(): Node {
        return this.gameSpace
    }   
}