/* eslint-disable no-console, no-undef */
const names = require('./ru-names')

const description = [
  'Only Russian Cyrillic lower case, hyphens and spaces are allowed',
  '    No trailing or leading spaces',
].join('\n')

test(description, () => {
  const wrong = Object.keys(names).filter(name =>
    !/^[а-яё-\s]+$/.test(name) ||
    name !== name.trim()
  )
  wrong.forEach(name => console.error(`"${name}"`))
  expect(wrong.length).toBe(0)
})
