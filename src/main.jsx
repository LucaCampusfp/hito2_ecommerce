import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import Tcg from './assets/components/PokeCard/tcg.jsx'
import './index.css'
import Footer from "./components/Footer";
import logo from "./assets/logo.png";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App />
    <Footer />

 
  </StrictMode>,
)
