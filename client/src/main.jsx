
import  React from 'react'
import { createRoot } from 'react-dom/client'
import Container from './Container'
import './index.css'
import './App.css'



const root = createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Container />
  </React.StrictMode>
);
