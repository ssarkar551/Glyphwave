import assert from 'node:assert/strict'
import { build } from 'vite'
import react from '@vitejs/plugin-react'

const bundleSize = async (entry) => {
  const result = await build({
    configFile: false,
    plugins: [react()],
    build: {
      write: false,
      lib: { entry, formats: ['es'], fileName: () => 'bundle.js' },
      rollupOptions: { external: ['react', 'react-dom', 'react/jsx-runtime'] },
    },
  })
  const outputs = Array.isArray(result) ? result.flatMap((item) => item.output ?? []) : result.output
  const chunk = outputs.find((item) => item.type === 'chunk')
  assert.ok(chunk, `No bundle output was generated for ${entry}`)
  return Buffer.byteLength(chunk.code)
}

const oneIcon = await bundleSize('src/emojis/Fire.jsx')
const fullLibrary = await bundleSize('src/index.js')
assert.ok(oneIcon < fullLibrary, `Tree-shaking fixture is not smaller: ${oneIcon} >= ${fullLibrary}`)
console.log(`Tree-shaking check passed: Fire ${oneIcon} bytes vs full library ${fullLibrary} bytes`)
