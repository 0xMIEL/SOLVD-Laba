require('./plus')
require('./minus')
require('./multiply')
require('./divide')

const rand = String((Math.random() * 1000000000000000000000).toFixed())
const rand2 = String((Math.random() * 10000000000000000).toFixed())

console.log(`Rand: ${rand}, Rand2: ${rand2} \n`)
console.log(rand.plus(rand2) == parseInt(rand) + parseInt(rand2))
console.log(rand.minus(rand2) == parseInt(rand) - parseInt(rand2))
console.log(rand.multiply(rand2) == parseInt(rand) * parseInt(rand2))
console.log(rand.divide(rand2) == Math.floor(parseInt(rand) / parseInt(rand2)))
