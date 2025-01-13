import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import './index.css'
import Doge from './assets/components/Dogloader/Doge.jsx'
import Cat from './assets/components/Catloader/CAt.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Doge />
    <Cat />
  </StrictMode>,
)
