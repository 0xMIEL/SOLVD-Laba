const { addValues } = require('./addValues')
const { stringifyValue } = require('./stringifyValue')
const { invertBoolean } = require('./invertBoolean')
const { convertToNumber } = require('./convertToNumber')
const { coerceToType } = require('./coerceToType')
const { coerceToDate } = require('./coerceToDate')

console.log(addValues(243, 3))
console.log(stringifyValue({ name: 'John' }))
console.log(invertBoolean(true))
console.log(convertToNumber([1]))
console.log(coerceToType('{"name":"John"}', 'object'))
console.log(coerceToDate(Date.now(), 'date'))
