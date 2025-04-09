const { sum, sub } = require('./index')

test('add 1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('sub 5 - 2 = 3', () => {
  expect(sub(5, 2)).toBe(3)
})
