import { useState } from 'react'
import { Clap, Disappointed, Eyes, Fire, Heart, Laughing, PartyPopper, Rocket, Sad, Sparkles, Star, ThumbsUp, Warning } from './index'
import './App.css'

const icons = [
  { name: 'ThumbsUp', Component: ThumbsUp, color: '#fbbf24' },
  { name: 'Fire', Component: Fire, color: '#f97316' },
  { name: 'Heart', Component: Heart, color: '#f43f5e' },
  { name: 'Eyes', Component: Eyes, color: '#38bdf8' },
  { name: 'Disappointed', Component: Disappointed, color: '#a78bfa' },
  { name: 'Sparkles', Component: Sparkles, color: '#facc15' },
  { name: 'Rocket', Component: Rocket, color: '#fb7185' },
  { name: 'PartyPopper', Component: PartyPopper, color: '#22c55e' },
  { name: 'Warning', Component: Warning, color: '#f59e0b' },
  { name: 'Star', Component: Star, color: '#eab308' },
  { name: 'Laughing', Component: Laughing, color: '#fbbf24' },
  { name: 'Sad', Component: Sad, color: '#60a5fa' },
  { name: 'Clap', Component: Clap, color: '#fb923c' },
]

function App() {
  const [query, setQuery] = useState('')
  const [size, setSize] = useState(64)
  const [copied, setCopied] = useState('')
  const visibleIcons = icons.filter(({ name }) => name.toLowerCase().includes(query.toLowerCase()))

  const copyExample = async (value) => {
    await navigator.clipboard.writeText(value)
    setCopied(value)
    window.setTimeout(() => setCopied(''), 1500)
  }

  return (
    <main className="app-shell">
      <nav className="topbar">
        <a className="brand" href="/" aria-label="Glyphwave home"><span className="brand-mark">✦</span> Glyphwave</a>
        <a className="github-link" href="https://github.com/ssarkar551/Glyphwave">View on GitHub ↗</a>
      </nav>

      <section className="hero">
        <p className="eyebrow">SVG-FIRST REACT EMOJI</p>
        <h1>Give your UI a little more feeling.</h1>
        <p className="hero-copy">Tiny, customizable emoji components for React. Install once, import only what you use, and make every product state more expressive.</p>
        <div className="install-command" role="group" aria-label="Installation command">
          <code>npm install glyphwave</code>
          <button onClick={() => copyExample('npm install glyphwave')} type="button">{copied === 'npm install glyphwave' ? 'Copied' : 'Copy'}</button>
        </div>
      </section>

      <section className="catalog" aria-labelledby="catalog-heading">
        <div className="catalog-header">
          <div><p className="eyebrow">THE STARTER SET</p><h2 id="catalog-heading">Find your expression</h2></div>
          <div className="controls">
            <label><span className="sr-only">Search emoji</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search icons" type="search" /></label>
            <label className="size-control">Size <input aria-label="Preview size" max="96" min="32" onChange={(event) => setSize(event.target.value)} type="range" value={size} /></label>
          </div>
        </div>
        <div className="icon-grid">
          {visibleIcons.map((icon) => (
            <article className="icon-card" key={icon.name}>
              <div className="icon-preview"><icon.Component width={size} height={size} fill={icon.color} /></div>
              <div className="icon-card-footer"><code>{icon.name}</code><button onClick={() => copyExample(`import { ${icon.name} } from 'glyphwave'`)} type="button">{copied.includes(icon.name) ? 'Copied' : 'Copy import'}</button></div>
            </article>
          ))}
        </div>
        {visibleIcons.length === 0 && <p className="empty-state">No expressions match “{query}”.</p>}
      </section>

      <footer><span>MIT licensed · Built for expressive interfaces</span><a href="https://www.npmjs.com/package/glyphwave">Read the npm docs ↗</a></footer>
    </main>
  )
}

export default App
