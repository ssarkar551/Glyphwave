import { existsSync, readFileSync, statSync } from 'node:fs'
import { createRequire } from 'node:module'

const required = ['dist/emoji-icon-lib.es.js', 'dist/emoji-icon-lib.cjs', 'index.d.ts']
for (const file of required) {
  if (!existsSync(file)) throw new Error(`Missing release file: ${file}`)
}

const esm = await import('../dist/emoji-icon-lib.es.js')
const require = createRequire(import.meta.url)
const cjs = require('../dist/emoji-icon-lib.cjs')
const expected = ['Check', 'Clap', 'Disappointed', 'Eyes', 'Fire', 'Heart', 'Laughing', 'PartyPopper', 'Rocket', 'Sad', 'Sparkles', 'Star', 'ThumbsUp', 'Warning', 'X']

for (const name of expected) {
  if (typeof esm[name] !== 'function' || typeof cjs[name] !== 'function') throw new Error(`Missing export: ${name}`)
}

const declaration = readFileSync('index.d.ts', 'utf8')
if (!declaration.includes('GlyphwaveProps')) throw new Error('Type declarations are incomplete')
console.log(`Smoke test passed: ${expected.length} ESM/CJS exports, ${statSync('dist/emoji-icon-lib.es.js').size} byte ESM bundle`)
