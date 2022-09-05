import { EventTarget } from "cc"
import { EventHandlerInterface } from "./EventHandlerInterface"
import { EventInterface } from "./EventInterface"

export class EventClass {
    static eventTarget: EventTarget = new EventTarget()

    static emitEvent(event: EventInterface): void {
        EventClass.eventTarget.emit(event.getEventName(), ...event.getArgs())
    }
    
    static registerEvent(event: string, listener: EventHandlerInterface) {
        EventClass.eventTarget.on(event, listener.handle, listener)
    }
}