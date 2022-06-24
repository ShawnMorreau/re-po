import { strict } from "node:assert"
import { join } from "node:path"
import { dirName, readJson } from "@re-/node"
import { assert } from "../src/index.js"

const testDir = dirName()
describe("Test functionality of snap function", () => {
    const key = "shawnSnap"
    const val = "hooplah"
    const snapTestFile = "snap.test.ts"
    const file = join(testDir, "assert.snapshots.json")

    it("Value in .snap() is correct", () => {
        assert(val).snap.toFile(key)
        //This is wrong right now, since this is the same as populating
        const res = readJson(file)
        assert(res[snapTestFile][key]).is(val)
    })
    //
    it("Value in .snap() is incorrect", () => {
        const a = 5
        strict.throws(() => assert(a).snap(4), strict.AssertionError, "4 !== 5")
        //line 20
    })
    it("updates snap value", () => {
        //@ts-ignore (using internal updateSnapshots hook)
        assert({ re: "dew" }, { updateSnapshots: true }).snap.toFile(key)
        //line 357
    })
    it("populates the snap", () => {
        //pre -> grab contents of assert.snapshots.json, see that there's  no value there
        //post -> read contents and see new value added
        //line 337
    })
})
/**
 * Things to test
 *
 * .snap(populated) -> essentially an equality check
 * .snap() with an update flag
 * .snap() doesn't have a value -> value gets updated
 */
