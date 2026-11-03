# Contributing to Glyphwave

Thanks for helping make Glyphwave more useful.

## Adding a component

1. Choose a clear PascalCase component name.
2. Use an inline SVG with a stable `viewBox`.
3. Accept and forward standard SVG props.
4. Provide a useful default `aria-label` and `role="img"`.
5. Export the component from `src/index.js` and `index.d.ts`.
6. Add it to the demo catalog and README category list.
7. Run `npm run check` before opening a pull request.

Keep the visual language consistent: simple geometry, predictable proportions, and colors controlled through props wherever practical. Do not copy artwork from proprietary emoji sets without documenting compatible licensing.

## Pull requests

Describe the user need, include a screenshot for visual changes, and keep unrelated refactors out of the same pull request. Bug reports and icon requests are welcome through GitHub Issues.
