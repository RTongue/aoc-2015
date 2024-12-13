const { countFloors } = require('./countFloors')

test('it returns -1 when going down one floor', ()=> {
  const result = countFloors(')')
  expect(result).toBe(-1)
})

