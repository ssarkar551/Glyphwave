import assert from 'node:assert/strict'
import * as ReactDOMServer from 'react-dom/server'
import { Check, Fire, Heart, Rocket } from '../dist/emoji-icon-lib.es.js'

const render = (Component, props = {}) => ReactDOMServer.renderToStaticMarkup(Component(props))

const fire = render(Fire, { width: 48, fill: 'orange', className: 'hot' })
assert.match(fire, /width="48"/)
assert.match(fire, /fill="orange"/)
assert.match(fire, /class="hot"/)
assert.match(fire, /aria-label="fire"/)

const check = render(Check, { 'aria-label': 'Complete' })
assert.match(check, /aria-label="Complete"/)
assert.match(render(Heart), /aria-label="heart"/)
assert.match(render(Rocket), /aria-label="rocket"/)
console.log('Component test passed: default labels, custom SVG props, and rendering')
