const { sum, sub } = require('./index')

test('add 1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('add with not number values', () => {
  expect(() => sum('hello', { a: 'b' })).toThrow('Param should be a number')
})

test('sub 5 - 2 = 3', () => {
  expect(sub(5, 2)).toBe(3)
})

test('add with not number values', () => {
  expect(() => sum({ a: 'b' }, new Date())).toThrow('Param should be a number')
})
