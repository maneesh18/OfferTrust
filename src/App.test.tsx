import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders app with routing', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  
  // Check if the home page content is rendered
  expect(screen.getByText(/Welcome to OfferTrust/i)).toBeInTheDocument();
}); 