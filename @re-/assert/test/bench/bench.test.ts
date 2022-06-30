import { fromHere } from "@re-/node"
import { Project } from "ts-morph"
const postMethodNameMatch = /\(('.+'|".+"|`.+`)\)/
const regex = {
    mean: new RegExp(`.mean${postMethodNameMatch}`, "g"),
    median: new RegExp(`.median${postMethodNameMatch}`, "g"),
    mark: new RegExp(`.mark${postMethodNameMatch}`, "g")
}
const cleanMethods: Record<string, string> = {
    mean: ".mean()",
    median: ".median()",
    mark: ".mark"
}
enum regMatcher {
    objectKey = 0,
    objectValue = 1
}
void (async () => {
    const project = new Project({})
    const testFile = project.addSourceFileAtPath(fromHere("test.bench.ts"))
    const statements = testFile.getStatements()
    const regexVals = Object.entries(regex)
    for (const statement of statements) {
        for (const regMatch of regexVals) {
            const key: string = regMatch[regMatcher.objectKey]
            const clearedStatement = statement
                .getText()
                .replace(regMatch[regMatcher.objectValue], cleanMethods[key])
            statement.replaceWithText(clearedStatement)
        }
    }
    await project.save()
})()
