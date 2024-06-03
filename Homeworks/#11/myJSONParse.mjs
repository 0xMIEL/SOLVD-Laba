import { Stack } from '../%239/stack.mjs'
import { JSON_REG_EXP } from './jsonRegExp.mjs'
import { data } from './data.mjs'

const sliceString = string => {
    string = string.trim()

    if (!string.startsWith('{')) throw new TypeError()

    const stack = new Stack()
    stack.push(0)

    const result = []

    for (let i = 1; i < string.length; i++) {
        if (string[i] === '{' || string[i] === '[') {
            stack.push(i)
        }

        try {
            if (string[i] === '}' || string[i] === ']') {
                const slice = string.slice(stack.pop(), i + 1)
                if (result.indexOf(slice) === -1) result.push(slice)
            }
        } catch (error) {
            throw new TypeError('Too many { or [ characters!')
        }
    }

    if (!stack.isEmpty()) throw new TypeError('Too many } or ] characters!')

    return result
}

const referSlices = slices => {
    let result = []

    for (let i = 0; i < slices.length; i++) {
        let template = slices[i]
        result.push(template)

        for (let j = i; j < slices.length; j++) {
            slices[j] = slices[j].replaceAll(template, `\<${i}\>`)
        }
    }

    return result
}

const parseSlices = slices => {
    const result = []

    for (const slice of slices) {
        let parsedSlice = {}
        if (slice[0] === '{') {
            const tokens = [...slice.matchAll(JSON_REG_EXP.KEY_VALUE)]
            tokens.forEach((token, index, array) => {
                if (token[7] === ',' || index === array.length - 1) {
                    if (token[6]) {
                        parsedSlice[token[1]] = result[token[6]]
                        return
                    }
                    parsedSlice[token[1]] = parseToken(token)
                } else {
                    throw new TypeError(`${token[0]} <- lack of comma!`)
                }
            })
            result.push(parsedSlice)
        }
        if (slice[0] === '[') {
            parsedSlice = []
            const tokens = [...slice.matchAll(JSON_REG_EXP.KEY_VALUE)]
            tokens.forEach((token, index, array) => {
                if (token[7] === ',' || index === array.length - 1) {
                    if (token[6]) {
                        parsedSlice.push(result[token[5]])
                        return
                    }
                    parsedSlice.push(parseToken(token, false))
                } else {
                    throw new TypeError(`${token[0]} <- lack of comma!`)
                }
            })
            result.push(parsedSlice)
        }
    }

    return result.at(-1)
}

const parseToken = (token, isKeyGroup = true) => {
    const offset = isKeyGroup ? 0 : -1
    if (token[2 + offset]) return token[2 + offset]
    if (token[3 + offset]) return parseFloat(token[3 + offset])
    if (token[4 + offset] === 'true') return true
    if (token[4 + offset] === 'false') return false
    if (token[5 + offset]) return null
}

const compose = (...functions) => {
    return input => {
        return functions.reduce((acc, func) => {
            return func(acc)
        }, input)
    }
}

export const myJSONParse = compose(sliceString, referSlices, parseSlices)