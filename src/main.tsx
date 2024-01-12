import { StrictMode } from 'react'

import ReactDOM from 'react-dom/client'

// eslint-disable-next-line import/extensions
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById(`root`)!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
