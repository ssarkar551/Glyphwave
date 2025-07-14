import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

export { default as ThumbsUp } from './emojis/Thumbsup';
