const highlightKeywords = (template, keywords) => {
    let result = template
    const tokens = template.match(/\${[0-9]}/g)

    for (const token of tokens) {
        const index = token.slice(2, -1)
        const element = `<span class='highlight'>${keywords[index]}<span>`
        result = result.replaceAll(token, keywords[index] ? element : '')
    }

    return result
}

const keywords = ['JavaScript', 'template', 'tagged']
const template =
    'Learn ${0} tagged templates to create custom ${1} literals for ${2} manipulation.'

const highlighted = highlightKeywords(template, keywords)

console.log(highlighted)
