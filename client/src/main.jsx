import React from 'react'; // Make sure to import React
import { createRoot } from 'react-dom/client'; // Correct import for createRoot
import Container from './Container';
import './index.css';

const root = createRoot(document.getElementById('root')); // Use createRoot directly
root.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);
