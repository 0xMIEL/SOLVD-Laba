const compose = (...functions) => {
    return input => {
        return functions.reduce((acc, func) => {
            return func(acc)
        }, input)
    }
}

// #1

const getFullName = person => `${person.firstName} ${person.lastName}`

console.log(getFullName({ firstName: 'John', lastName: 'Smith' }))

// #2

const changeToLowerCase = string => string.toLowerCase()
const splitIntoUniqueWords = text => text.match(/\w+/g)
const removeDuplications = (element, index, array) =>
    array.indexOf(element) == index
const filterOutDuplication = array => array.filter(removeDuplications)
const sortArray = array => array.toSorted()

const filterUniqueWords = compose(
    changeToLowerCase,
    splitIntoUniqueWords,
    filterOutDuplication,
    sortArray
)

const text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

console.log(filterUniqueWords(text))

// #3

const sumGrades = (acc, student) => acc + student.grade
const getAverageGrade = students =>
    students.reduce(sumGrades, 0) / students.length

const students = [
    { name: 'Alice', grade: 4 },
    { name: 'Charlie', grade: 2 },
    { name: 'Eva', grade: 6 },
    { name: 'Bob', grade: 1 },
    { name: 'Ian', grade: 5 },
    { name: 'Julia', grade: 3 },
    { name: 'George', grade: 1 },
    { name: 'Hannah', grade: 6 },
    { name: 'David', grade: 3 },
    { name: 'Fiona', grade: 5 },
]

console.log(getAverageGrade(students))
