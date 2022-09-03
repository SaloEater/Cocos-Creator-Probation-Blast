import { injected } from "saloeater-brandi"
import { TYPES } from "../Scripts/types"
import * as tests from "./Tests"

export class TestsPipeline {
    run() {
        tests.default.forEach((i) => {
            let instance = new i()
            let errors = new Map<string[2], string>()
            console.log(["Running tests for " + i.prototype.constructor.name])

            let functionNames = Object.getOwnPropertyNames(i.prototype)
                .filter(i => i.startsWith('test'))
            functionNames.forEach((functionName: string) => {
                try {
                    instance[`${functionName}`]()
                } catch (error) {
                    errors.set([functionName, error.message], error.stack)
                }
            })
            
            if (errors.size > 0) {
                console.log(...errors)
            }
        })
    }
}