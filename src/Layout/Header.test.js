import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders header with correct text and styling', () => {
    render(<Header />);
    
    const headerElement = screen.getByRole('banner');
    const headingElement = screen.getByRole('heading', { name: /newyork times/i });

    expect(headerElement).toBeInTheDocument();
    expect(headingElement).toBeInTheDocument();
  });
