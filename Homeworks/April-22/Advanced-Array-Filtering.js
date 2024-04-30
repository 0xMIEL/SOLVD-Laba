const customFilterUnique = (array, callback) => {
    const memory = new Set()

    return array.filter(element => {
        if (!callback(element)) return false
        
        const normalizedElement = JSON.stringify(
            Object.entries(element).toSorted()
        )

        if (!memory.has(normalizedElement)) {
            memory.add(normalizedElement)
            return true
        }

        return false
    })
}

let arrayOfObjects = [
    { a: 1, b: 2 },
    { a: 1, b: 2 },
    { c: 3, d: 4 },
    { a: 5, b: 6 },
    { e: 7, f: 8 },
    { g: 9, h: 0 },
]

const filterByPropertyA = obj => {
    if (!obj || typeof obj !== 'object')
        throw new Error('pass an object as parameter')
    return Object.keys(obj).includes('a') ? obj : undefined
}

console.log(customFilterUnique(arrayOfObjects, filterByPropertyA))
