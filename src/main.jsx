import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Suppress specific annoying warnings from third-party libraries and browser extensions
const originalWarn = console.warn;
console.warn = (...args) => {
  const msg = typeof args[0] === 'string' ? args[0] : '';
  if (
    msg.includes('THREE.Clock') || 
    msg.includes('using deprecated parameters for the initialization function')
  ) {
    return;
  }
  originalWarn(...args);
};

const originalError = console.error;
console.error = (...args) => {
  const msg = typeof args[0] === 'string' ? args[0] : (args[0]?.message || '');
  if (msg.includes('n.addEventListener is not a function')) {
    return;
  }
  originalError(...args);
};

window.addEventListener('error', (e) => {
  if (e.message && e.message.includes('n.addEventListener is not a function')) {
    e.preventDefault(); // Stop it from printing to the console
  }
});

window.addEventListener('unhandledrejection', (e) => {
  if (e.reason && e.reason.message && e.reason.message.includes('n.addEventListener is not a function')) {
    e.preventDefault();
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
