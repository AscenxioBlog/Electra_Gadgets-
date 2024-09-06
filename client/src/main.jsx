import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Container from './Container'
import './index.css'


const root = ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>,
)
