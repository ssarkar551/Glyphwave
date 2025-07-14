````markdown
# 🌊 Glyphwave

**Glyphwave** is a lightweight, tree-shakable React component library for SVG-based **icons** and **emojis**. Designed to be easy to use, customize, and scale in modern React applications.

---

## 🚀 Features

- ⚡ Pure SVG components – no font or image dependencies
- 📦 Tree-shakable – import only what you use
- 🎨 Fully customizable via props (color, size, className, etc.)
- ♿ Accessible and semantic
- 🧩 Works out of the box with Vite, Webpack, Next.js, etc.

---

## 📦 Installation

```bash
npm install glyphwave
````

or

```bash
yarn add glyphwave
```

---

## 🔧 Usage

```jsx
import { ThumbsUp, Fire } from 'glyphwave';

function App() {
  return (
    <div>
      <ThumbsUp style={{ fontSize: 32 }} />
      <Fire width={32} height={32} fill="orange" />
    </div>
  );
}
```

Each icon/emoji is exported as a self-contained React component.

---

## 🧑‍💻 Component Props

Each component supports all valid `<svg>` props:

* `width`, `height`
* `fill`, `stroke`
* `className`, `style`
* `aria-label`, `role`

Example:

```jsx
<ThumbsUp width={48} fill="blue" aria-label="thumbs up" />
```

---

## 📁 Importing Only What You Need (Tree-Shaking)

```jsx
import { Fire } from 'glyphwave';
```

> Only the `Fire` component will be included in your bundle.

---

## 📚 List of Icons and Emojis

Coming soon in the documentation site!

---

## 🛠️ Development

Clone the repo and build:

```bash
git clone https://github.com/yourusername/glyphwave.git
cd glyphwave
npm install
npm run build
```

Link it locally to another React project:

```bash
npm link
# In your other project:
npm link glyphwave
```

---

## 📤 Publishing

Ensure the build outputs (`dist/`) and entry fields in `package.json` are correct:

```bash
npm run build
npm publish --access public
```

---

## 📃 License

MIT — free for personal and commercial use.

---

## 🙌 Contributions

PRs are welcome! Add new icons/emojis or improve performance/styling. See the [CONTRIBUTING.md](CONTRIBUTING.md) (coming soon) for guidelines.

---

## 🔗 Links

* [GitHub Repo](https://github.com/yourusername/glyphwave)
* [NPM Package](https://www.npmjs.com/package/glyphwave)

---

```

---


