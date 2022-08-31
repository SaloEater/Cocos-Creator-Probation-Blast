import * as tests from "./Tests"

export class TestsPipeline {
    run() {
        tests.default.forEach((i) => {
            let errors = new Map<string, string>()
            console.log(["Running tests for " + i.prototype.constructor.name])
            let functionNames = Object.getOwnPropertyNames(i.prototype)
            functionNames.forEach((functionName: string) => {
                if (functionName.startsWith('test')) {
                    let testFunction = i.prototype[functionName]
                    try {
                        testFunction()
                    } catch (error) {
                        errors.set(functionName, error.message)
                    }
                }
            })
            if (errors.size > 0) {
                console.log(...errors)
            }
        })
    }
}