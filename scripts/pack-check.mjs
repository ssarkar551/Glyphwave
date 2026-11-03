import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'

const packageJson = JSON.parse(readFileSync('package.json', 'utf8'))
const expectedFiles = [...packageJson.files, packageJson.main, packageJson.module].filter(Boolean)
for (const file of expectedFiles) assert.ok(existsSync(file), `Release file is missing: ${file}`)
assert.equal(packageJson.exports['.'].types, './index.d.ts')
assert.equal(packageJson.exports['.'].import, './dist/emoji-icon-lib.es.js')
assert.equal(packageJson.exports['.'].require, './dist/emoji-icon-lib.cjs')
console.log(`Pack check passed: ${expectedFiles.length} release paths and conditional exports verified`)
