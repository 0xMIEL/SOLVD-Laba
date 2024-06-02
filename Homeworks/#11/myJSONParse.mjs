import { data } from './data.mjs'
import { Stack } from '../%239/stack.mjs'

class JSON_REG_EXP {
    static NUMBER = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][-+]?\d+)?)/g
    static STRING = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g
    static BOOLEAN = /(true|false)/g
    static NULL = /(null)/g
    static KEY = `\\{?\\s*"([a-zA-Z_]\\s*\\w*|\\d+)"\\:\\s*`
    static ALL_VALUES = `(?:${this.NUMBER.source}|${this.STRING.source}|${this.BOOLEAN.source}|${this.NULL.source})`
    static KEY_VALUE = new RegExp(
        `${this.KEY}${this.ALL_VALUES}\\s*(?:\\,(?!\\s*\\})|(?<!\\,)\\})`,
        'g'
    )
}

export const myJSONParse = string => {
    const parsedJSON = {}
    const tokenizedString = [...string.matchAll(JSON_REG_EXP.KEY_VALUE)]
    tokenizedString.forEach(token => {
        let value = token[3]
        if (token[2]) value = parseFloat(token[2])
        else if (token[4] === 'true') value = true
        else if (token[4] === 'false') value = false
        else if (token[5]) value = null
        Object.assign(parsedJSON, { [token[1]]: value })
    })
    console.log(parsedJSON)
}

