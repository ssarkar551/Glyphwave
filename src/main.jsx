import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

export { default as ThumbsUp } from './emojis/Thumbsup';
export { default as Fire } from './emojis/Fire';
export { default as Heart } from './emojis/Heart';
