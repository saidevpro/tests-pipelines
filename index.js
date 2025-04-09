function checkParamIsNumber() {
  for (p of arguments) {
    if (typeof p !== 'number') {
      throw new Error('Param should be a number')
    }
  }
}

function sum(a, b) {
  checkParamIsNumber(a, b)
  return a + b
}

function sub(a, b) {
  checkParamIsNumber(a, b)
  return a - b
}

module.exports = { sum, sub }
