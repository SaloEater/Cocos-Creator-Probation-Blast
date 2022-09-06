import { InputStateInterface } from "./InputStateInterface"

export class InputState implements InputStateInterface {
    private on: boolean = true

    isOn(): boolean {
        return this.on
    }
    
    turnOn(): void {
        this.on = true
    }

    turnOff(): void {
        this.on = false
    }
}