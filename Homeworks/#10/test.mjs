import { HashTable } from './customHashTable.mjs'

const hashTable = new HashTable()

// inserting
hashTable.insert('name', 'John')
hashTable.insert('age', 40)
hashTable.insert('city', 'London')

// getting
const testName = hashTable.get('name')
console.log(testName === 'John' ? 'passed' : 'failed')
const testAge = hashTable.get('age')
console.log(testAge === 40 ? 'passed' : 'failed')
const testCity = hashTable.get('city')
console.log(
    testCity === 'London' ? 'passed' : 'failed'
)
const testSurname = hashTable.get('surname')
console.log(testSurname === null ? 'passed' : 'failed')

// deleting
const deleteResult = hashTable.delete('age')
console.log(deleteResult === true ? 'passed' : 'failed')
const deletedAge = hashTable.get('age')
console.log(deletedAge === null ? 'passed' : 'failed')
const deleteResult2 = hashTable.delete('age')
console.log(
    deleteResult2 === false ? 'passed' : 'failed'
)
