import { Stack } from '../%239/stack.mjs'
import { JSON_REG_EXP } from './jsonRegExp.mjs'
import { data } from './data.mjs'

/*  -sliceString is used to slice objects and arrays from a string of           characters-

    input:
    
    "{
        "name": "John",
        "parents": ["Mia", "Bill"],
        "location": {
            "city" "London",
            "country": "Great Britain"
        }
    }"

    output: [ 
        "["Mia", "Bill"]",
        "{
            "city" "London",
            "country": "Great Britain"
        }" ,
        "{
        "name": "John",
        "parents": ["Mia", "Bill"],
        "location": {
            "city" "London",
            "country": "Great Britain"
        }
    }
*/

const sliceString = string => {
    string = string.trim()

    if (!string.startsWith('{')) throw new TypeError('It is not a JSON!')

    const objectStack = new Stack()
    const arrayStack = new Stack()
    objectStack.push(0)

    // avoid copies of the objects and arrays
    const result = new Set()

    // slice the objects and arrays
    const handleClosingBrackets = (stack, i) => {
        return string.slice(stack.pop(), i + 1)
    }

    for (let i = 1; i < string.length; i++) {
        if (objectStack.isEmpty()) throw new TypeError('Bad nesting')

        const char = string[i]

        // catch the objects and arrays
        if (char === '{') {
            objectStack.push(i)
        } else if (char === '[') {
            arrayStack.push(i)
        }

        try {
            if (char === '}') {
                result.add(handleClosingBrackets(objectStack, i))
            } else if (char === ']') {
                result.add(handleClosingBrackets(arrayStack, i))
            }
        } catch (error) {
            throw new TypeError('Too many { or [ characters!')
        }
    }

    if (!objectStack.isEmpty() || !arrayStack.isEmpty())
        throw new TypeError('Too many } or ] characters!')

    return Array.from(result)
}

/*  -referSlices is used to mark each element and
    references to each other if they are nested
    one inside the other-

    input: [ 
        "["Mia", "Bill"]",
        "{
            "city" "London",
            "country": "Great Britain"
        }" ,
        "{
        "name": "John",
        "parents": ["Mia", "Bill"],
        "location": {
            "city" "London",
            "country": "Great Britain"
        }
    }

    output: [ 
        "["Mia", "Bill"]",
        "{
            "city" "London",
            "country": "Great Britain"
        }" ,
        "{
        "name": "John",
        "parents": <0>, <- it's a token that refer to first element of this array ("["Mia", "Bill"]") 
        "location": <1>
    }
*/

const referSlices = slices => {
    let result = []

    for (let i = 0; i < slices.length; i++) {
        let template = slices[i]
        // add refered slice to result
        result.push(template)

        for (let j = i; j < slices.length; j++) {
            // replace nesting object with its main instance
            slices[j] = slices[j].replaceAll(template, `\<${i}\>`)
        }
    }

    return result
}

/* -parseSlices is used to parse objects and arrays and then 
    merging references-

    input: [ 
        "["Mia", "Bill"]",
        "{
            "city" "London",
            "country": "Great Britain"
        }" ,
        "{
        "name": "John",
        "parents": <0>, <- it's a token that refer to first element of this array ("["Mia", "Bill"]") 
        "location": <1>
    }

    output: {
        name: "John",
        parents: ["Mia", "Bill"],
        "location": {
            city: "London",
            country: "Great Britain"
        }
    }

*/

const parseSlices = slices => {
    const result = []
    let spellingErrors = []

    for (let i = 0; i < slices.length; i++) {
        let parsedSlice = {}

        if (slices[i][0] === '{') {
            // tokenize objects using regexp with capture groups
            const tokens = [...slices[i].matchAll(JSON_REG_EXP.KEY_VALUE)]
            tokens.forEach((token, index, array) => {
                // catch syntax errors
                slices[i] = slices[i].replace(token[0], '')

                // merging and checking if object element has comma
                if (token[7] === ',' || index === array.length - 1) {
                    if (token[6]) {
                        parsedSlice[token[1]] = result[token[6]]
                    } else {
                        parsedSlice[token[1]] = parseToken(token)
                    }
                } else {
                    throw new TypeError(`${token[0]} <- lack of comma!`)
                }
            })
            result.push(parsedSlice)
        } else if (slices[i][0] === '[') {
            parsedSlice = []
            // tokenize arrays using regexp with capture groups

            const tokens = [...slices[i].matchAll(JSON_REG_EXP.ARRAY_VALUES)]
            tokens.forEach((token, index, array) => {
                // catch syntax errors
                slices[i] = slices[i].replace(token[0], '')

                // merging and checking if object element has comma
                if (token[6] === ',' || index === array.length - 1) {
                    if (token[5]) {
                        parsedSlice.push(result[token[5]])
                    } else {
                        parsedSlice.push(parseToken(token, true))
                    }
                } else {
                    throw new TypeError(`${token[0]} <- lack of comma!`)
                }
            })
            result.push(parsedSlice)
        }
    }

    // handle syntax objects
    slices.forEach(slice => {
        // split errors into array
        const errors = slice.split(JSON_REG_EXP.SYNTAX_REST)

        // add them to the array
        spellingErrors.push(...errors)
    })

    // remove empty elements
    spellingErrors = spellingErrors.filter(error => error != '')

    // check if error occured
    if (spellingErrors.length > 0) {
        throw new TypeError(`Unknow syntax: ${spellingErrors.join('\t')}`)
    }

    return result.at(-1)
}

// parseToken is used to parse the result from RegExp capture groups

const parseToken = (token, isArray = false) => {
    const offset = isArray ? -1 : 0
    // string
    if (token[2 + offset]) return token[2 + offset]

    //number
    if (token[3 + offset]) return parseFloat(token[3 + offset])

    // true
    if (token[4 + offset] === 'true') return true

    // false
    if (token[4 + offset] === 'false') return false

    // null
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