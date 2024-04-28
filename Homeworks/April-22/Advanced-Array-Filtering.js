const customFilterUnique = (array, callback) => {
    const uniqeElements = []

    return array.filter(object => {
        const result = callback(object)
        if (uniqeElements.indexOf(result) === -1) {
            uniqeElements.push(result)
            return true
        }
        return false
    })
}

const people = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 },
    { name: 'John', age: 30 },
    { name: 'Emily', age: 33 },
    { name: 'Michael', age: 40 },
    { name: 'Sarah', age: 32 },
    { name: 'Alice', age: 25 },
    { name: 'Emily', age: 33 },
    { name: 'John', age: 30 },
    { name: 'Laura', age: 29 },
    { name: 'Alice', age: 25 },
]

const name = person => person.name

console.log(customFilterUnique(people, name))
