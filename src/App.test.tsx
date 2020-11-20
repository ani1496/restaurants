import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './components/Header';

test('renders learn react link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Dine Me/i);
  expect(linkElement).toBeInTheDocument();
});
