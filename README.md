# Glyphwave

Glyphwave is a lightweight React component library for expressive SVG emoji and UI symbols. Every component is tree-shakable, accepts standard SVG props, and works with modern React applications.

## Why Glyphwave?

- Inline SVG with no image or font dependencies
- Customizable size, color, className, accessibility labels, and SVG attributes
- ESM and CommonJS builds
- TypeScript declarations included
- MIT licensed for personal and commercial projects

## Install

```bash
npm install glyphwave
```

## Quick start

```jsx
import { Fire, Rocket, Sparkles } from 'glyphwave'

export function ProductStatus() {
  return (
    <div>
      <Sparkles width={32} fill="#a78bfa" aria-label="New" />
      <Fire width={32} fill="#f97316" aria-label="Trending" />
      <Rocket width={32} fill="#38bdf8" aria-label="Launching" />
    </div>
  )
}
```

Every component accepts `SVGProps<SVGSVGElement>`, including `width`, `height`, `fill`, `stroke`, `className`, `style`, `aria-label`, and `role`.

## Component catalog

### Reactions and expressions

`ThumbsUp` · `Heart` · `Fire` · `Eyes` · `Disappointed` · `Laughing` · `Sad` · `Clap`

### Product and status symbols

`Sparkles` · `Rocket` · `PartyPopper` · `Check` · `X` · `Warning` · `Star`

Import only the components you need:

```jsx
import { Check } from 'glyphwave'
```

## Accessibility

Components provide a default accessible label and `role="img"`. Supply a more specific `aria-label` when the icon meaning depends on context, or use the icon as decoration with `aria-hidden="true"`.

## Development

```bash
git clone https://github.com/ssarkar551/Glyphwave.git
cd Glyphwave
npm install
npm run check
```

`npm run check` runs ESLint, builds the package, and verifies ESM/CJS exports plus the declaration file.

The interactive catalog is available during development through the Vite dev server:

```bash
npm run dev
```

## Release

```bash
npm run check
npm publish --access public
```

The package exposes `index.d.ts`, an ESM build, and a CommonJS build. Keep the component catalog and README in sync when adding icons.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for component conventions, accessibility expectations, and pull request guidance.

## Links

- [Interactive demo](https://github.com/ssarkar551/Glyphwave)
- [GitHub repository](https://github.com/ssarkar551/Glyphwave)
- [npm package](https://www.npmjs.com/package/glyphwave)

## License

MIT
