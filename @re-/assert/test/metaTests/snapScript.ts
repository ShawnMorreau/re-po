import { copyFileSync } from "node:fs"
import { join } from "node:path"
import { dirName, fromCwd, fromHere, shell } from "@re-/node"
import { Project, SyntaxKind } from "ts-morph"

//Make a copy of the template file
const assertMatch = /^assert\(.*\)/
const file = "template.ts"

export const doStuff = () => {
    const testDir = dirName()
    const templateFile = join(testDir, "snapTemplate.ts")
    const copy = join(testDir, file)
    copyFileSync(templateFile, copy)

    const p = new Project()
    const fp = fromCwd("metaTests", file)

    const cmd = `pnpm ts-node ${fp}`
    shell(cmd)

    const testFile = p.addSourceFileAtPath(fromHere(file))
    const statements = testFile
        .getDescendantsOfKind(SyntaxKind.ExpressionStatement)
        .filter((descendant) => assertMatch.test(descendant.getText()))

    for (const s of statements) {
        const a = s.getFirstDescendantByKindOrThrow(SyntaxKind.CallExpression)
        const c = a.getFirstDescendantByKindOrThrow(SyntaxKind.CallExpression)

        console.log(c.getArguments()[0].getText())
    }
}

doStuff()
