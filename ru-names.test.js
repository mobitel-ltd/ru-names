/* eslint-disable no-console, no-undef, global-require */
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

test('Values should be "m" and "f" only', () => {
  const GENDERS = ['m', 'f']
  const wrong = Object.keys(names).filter(name =>
    !GENDERS.includes(String(names[name]))
  )
  wrong.forEach(name =>
    console.error(`"${name}" - wrong value "${names[name]}"`)
  )
  expect(wrong.length).toBe(0)
})

test('ESlint', () => {
  const CLIEngine = require('eslint').CLIEngine
  const cli = new CLIEngine()
  const report = cli.executeOnFiles(['.'])
  if (report.errorCount) {
    console.error(`There are ${report.errorCount} ESlint errors.
    Please run 'npm run lint -s' (or 'yarn test') for details`)
  }
  expect(report.errorCount).toBe(0)
})
