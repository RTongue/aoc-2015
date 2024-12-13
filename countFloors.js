function countFloors(input) {
  let ups = 0
  let downs = 0
  for (let i = 0; i < input.length; i++) {
    const direction = input[i]
    switch (direction) {
      case '(':
        ups++
      case ')':
        downs++
      default:
        continue
    }
  }
  return ups - downs
}

module.exports = {
  countFloors
}
