<<<<<<< HEAD
import React from 'react'; // Make sure to import React
import { createRoot } from 'react-dom/client'; // Correct import for createRoot
import Container from './Container';
import './index.css';

const root = createRoot(document.getElementById('root')); // Use createRoot directly
root.render(
=======

import React from 'react'
import { createRoot } from 'react-dom/client'
import Container from './Container'
import './index.css'


const root = createRoot(document.getElementById('root')).render(
>>>>>>> bed29155d1a4961d0a4035c8d142df485a6e6447
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);
