import { CCInteger, Component, Vec2, _decorator } from "cc";

const {ccclass, property} = _decorator

@ccclass
export class CellMovementComponent extends Component {
    @property(CCInteger)
    speed: number = 5

    @property(CCInteger)
    targetX: number = 0

    @property(CCInteger)  
    targetY: number = 0  

    onLoad() {
        this.enabled = false
    }

    startMoving() {
        this.enabled = true
    }

    setTargetX(targetX: number) {
        this.targetX = targetX
    }
    
    setTargetY(targetY: number) {
        this.targetY = targetY
    }

    update(deltaTime: number) {
        let speed = this.speed * deltaTime
        let currentPosition = this.node.getPosition()
        let x = currentPosition.x
        let y = currentPosition.y

        let targetVec2 = new Vec2(this.targetX, this.targetY)
        let currentVec2 = new Vec2(x, y)
        let diffVec2 = targetVec2.subtract(currentVec2)

        let nextPositionVec2 = currentVec2.add(diffVec2.multiplyScalar(speed))

        this.node.setPosition(nextPositionVec2.x, nextPositionVec2.y, currentPosition.z)

        if (Math.sqrt(Math.pow(this.targetX - x, 2) + Math.pow(this.targetY - y, 2)) <= speed) {
            this.enabled = false
        }
    }
}