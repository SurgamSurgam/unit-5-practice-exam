const { validate , allowable} = require('./validate.js');

test('entry returns a boolean', () => {
  expect(typeof validate({}, 'a', 'string')).toBe('boolean')
})

test('entry returns true', () => {
  expect(validate({a: 'b'}, 'a', 'string')).toBe(true)
})

// I want the testing of this case to return false - the logic of what's being validated is true however should I not set the toBe to be what I want the result to look like?
// Same goes for the last test
test('returns false if object value is not available', () => {
  // console.log(allowable({a: undefined}, 'a', 'undefined'))
  expect(allowable({a: undefined}, 'a', 'undefined')).toBe(false)
})

test('returns false if object value is a number', () => {
  expect(allowable({a: 1}, 'a', 'number')).toBe(false)
})
