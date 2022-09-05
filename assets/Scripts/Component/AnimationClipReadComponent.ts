import { Animation, AnimationClip, Component, _decorator, animation, RealCurve, RealKeyframeValue, Input, Node, EventMouse } from "cc";

const { ccclass } = _decorator
const { VectorTrack, TrackPath  } = animation

@ccclass
export class AnimationClipReadComponent extends Component {
    onLoad() {
        let animation = this.node.getComponent(Animation)
        let clip = animation.clips[0]
        clip.duration = 1
        let delay = 1

        let originChannel = clip.getTrack(0).channels()[0]
        let originCurve = originChannel.curve as RealCurve
        let originValues = originCurve['_values']
        originValues[0].value = this.node.position.x
        originValues[1].value = 100
        let XTimes = originCurve['_times']
        XTimes[1] = delay

        let targetChannel = clip.getTrack(0).channels()[1]
        let targetCurve = targetChannel.curve as RealCurve
        let targetValues = targetCurve['_values']
        targetValues[0].value = this.node.position.y
        targetValues[1].value = 100
        let YTimes = targetCurve['_times']
        YTimes[1] = delay

        let z = 1
        this.node.on(Input.EventType.MOUSE_UP, (z: EventMouse) => {
            animation.play()
            console.log(z.target.position)
        }, this)
    }
}