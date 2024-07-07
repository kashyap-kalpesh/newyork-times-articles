import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders the footer component', () => {
  render(<Footer />);
  const currentYear = new Date().getFullYear();
  expect(screen.getByText(`©${currentYear} NY-times`)).toBeInTheDocument();
});
