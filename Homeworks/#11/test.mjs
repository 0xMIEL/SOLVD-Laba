import { myJSONParse } from './myJSONParse.mjs'

const error1 = `{
    name: "Mia",
    "age": 30
}`

// console.log(myJSONParse(error1)) // Error

const error2 = `
{
    "name": "Noe"
    "age": 30
}
`

// console.log(myJSONParse(error2)) // Error

const error3 = `{
    {
        "name": "Abigale",
        "isStudent": True
    }
}`

// console.log(myJSONParse(error3)) // Error

const error4 = `
{
    "name": "Amy,
    "age": 30
}
`

// console.log(myJSONParse(error4)) // Error

const error5 = `
{
    "names": ["Jan", "Anna" "Piotr"]
}
`

// console.log(myJSONParse(error5)) // Error

const correct1 = `
{
    "name": "Jake",
    "age": 30,
    "isStudent": false,
    "scores": [95, 82, 74],
    "address": {
        "street": "Golden",
        "city": "Warsaw"
    }
}
`

console.log(myJSONParse(correct1))

const correct2 = `{
    "students": [
        {
            "name": "Joe",
            "age": 22
        },
        {
            "name": "Ana",
            "age": 24
        }
    ]
}`

console.log(myJSONParse(correct2))

const correct3 = `{
    "numbers": [1, 2, 3, 4, 5]
}
`

console.log(myJSONParse(correct3))

const correct4 = `
{
    "name": "John",
    "age": null,
    "isStudent": null
}
`

console.log(myJSONParse(correct4))

const correct5 = `{
    "company": {
        "name": "TechCorp",
        "location": {
            "city": "London",
            "country": "UK"
        },
        "employees": 250
    }
}
`

console.log(myJSONParse(correct5))
