import { assert } from "../../src/assert.js"

//ensure 5
assert(5).snap()

//ensure object
assert({ re: "do" }).snap()

//ensure type
assert({ re: "do" }).equals({ re: "do" }).type.toString.snap()

//ensure value updates
// @ts-ignore (using internal updateSnapshots hook)
assert(5, { updateSnapshots: true }).snap(6)

// //ensure 5
// assert(5).snap()

// //ensure object
// assert({ re: "do" }).snap()

// //ensure type
// assert({ re: "do" }).equals({ re: "do" }).type.toString.snap()

// //ensure value updates
// // @ts-ignore (using internal updateSnapshots hook)
// assert(5, { updateSnapshots: true }).snap(6)
