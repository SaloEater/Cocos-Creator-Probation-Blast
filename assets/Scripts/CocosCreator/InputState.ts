import { InputStateInterface } from "./InputStateInterface"

export class InputState implements InputStateInterface {
    private a: number
    constructor() {
        this.a = 1 // Манипуляция чтобы контейнер смог создать объект без new
    }
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