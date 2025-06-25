import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('link has correct href and logo alt text', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name: /learn react/i });
  expect(linkElement).toHaveAttribute('href', 'https://reactjs.org');
  const logoImg = screen.getByRole('img', { name: /logo/i });
  expect(logoImg).toHaveAttribute('alt', 'logo');
});
