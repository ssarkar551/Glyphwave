import { Check, Fire, Rocket, Sparkles } from 'glyphwave'

export function Example() {
  return (
    <div>
      <Sparkles width={32} fill="#a78bfa" aria-label="New" />
      <Fire className="status-icon" />
      <Rocket data-testid="launch-icon" />
      <Check aria-hidden="true" />
    </div>
  )
}
