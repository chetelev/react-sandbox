import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import App from './App';

hydrate(
  <StrictMode>
    <BrowserRouter>
      <App />{' '}
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
