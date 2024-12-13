const fs = require('fs')
const { countFloors } = require('./countFloors')

const input = fs.readFileSync('./day1/input.txt', 'utf8')

const result = countFloors(input)

console.log(result)

