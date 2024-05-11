const translations = {
    en: {
        greet: 'Hello',
        intro: 'Welcome to our website',
    },
    fr: {
        greet: 'Bonjour',
        intro: 'Bienvenue sur notre site web',
    },
}

const localize = (strings, ...values) => {
    return language => {
        const translation = translations[language]
        return strings.reduce((accumulator, currentValue, index) => {
            const value = values[index] ?? ''
            return (
                accumulator +
                currentValue +
                (value ? translation[value] : value)
            )
        }, '')
    }
}

const language = 'en'
const greeting = 'greet'
const introduction = 'intro'

const localizedGreeting = localize`${greeting}`(language)
const localizedIntroduction = localize`${introduction}`(language)

console.log(localizedGreeting)
console.log(localizedIntroduction)
