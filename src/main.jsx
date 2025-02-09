import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'

import './index.css'
import Footer from "../src/assets/components/Footer/footer.jsx";




createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App />
    <Footer />

 
  </StrictMode>,
)
