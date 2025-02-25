// Changing this file at all will break tests as it is used to test source locations
import { caller, dirName } from "../src/index.js"

const formatPath = { relative: dirName() }

export const callMe = () => {
    const inTheNight = () => caller({ formatPath })
    return inTheNight()
}

export const callMeAnonymous = () => (() => caller({ formatPath }))()
