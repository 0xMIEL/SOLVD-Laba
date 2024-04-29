const multiline = string => {
    const splitIntoLines = string[0].split('\n').slice(1, -1)
    let result = ''

    for (let i = 0; i < splitIntoLines.length; i++) {
        result += i + 1 + ' ' + splitIntoLines[i]
        if (i < splitIntoLines.length - 1) result += '\n'
    }

    return result
}

const code = multiline`
function add(a, b) {
return a + b;
}
`

console.log(code)
