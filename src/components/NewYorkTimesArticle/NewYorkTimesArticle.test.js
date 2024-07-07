import React from 'react';
import { render, screen } from '@testing-library/react';
import NewYorkTimesArticle from './NewYorkTimesArticle';

const mockArticle = {
  title: 'Sample Article Title',
  multimedia: [{ url: 'https://static01.nyt.com/images/2024/07/06/multimedia/06cottom-zpmb/06cottom-zpmb-thumbStandard.jpg' }],
  url: 'https://www.nytimes.com/2024/07/06/opinion/biden-debate-scotus-immunity.html',
  adx_keywords: 'article description',
};

test('renders article title', () => {
  render(<NewYorkTimesArticle article={mockArticle} />);
  const titleElement = screen.getByText('Sample Article Title');
  expect(titleElement).toBeInTheDocument();
});

test('renders article image', () => {
  render(<NewYorkTimesArticle article={mockArticle} />);
  const imageElement = screen.getByAltText('Sample Article Title');
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute('src', 'https://static01.nyt.com/images/2024/07/06/multimedia/06cottom-zpmb/06cottom-zpmb-thumbStandard.jpg');
});

test('renders article description', () => {
  render(<NewYorkTimesArticle article={mockArticle} />);
  const keywordsElement = screen.getByText('article description');
  expect(keywordsElement).toBeInTheDocument();
});

test('renders "Read More" link with correct URL', () => {
  render(<NewYorkTimesArticle article={mockArticle} />);
  const readMoreLink = screen.getByText('Read More');
  expect(readMoreLink).toBeInTheDocument();
  expect(readMoreLink).toHaveAttribute('href', 'https://www.nytimes.com/2024/07/06/opinion/biden-debate-scotus-immunity.html');
  expect(readMoreLink).toHaveAttribute('target', '_blank');
});

