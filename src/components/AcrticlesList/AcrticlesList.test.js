import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import ArticlesList from './AcrticlesList';

jest.mock('../../services/getAllArticles', () => {
  return jest.fn(() =>
    Promise.resolve({
      results: [
        { url: 'article-1-url', title: 'Article 1' },
        { url: 'article-2-url', title: 'Article 2' },
        { url: 'article-3-url', title: 'Article 3' },
        { url: 'article-4-url', title: 'Article 4' },
        { url: 'article-5-url', title: 'Article 5' },
        { url: 'article-6-url', title: 'Article 6' },
      ],
    })
  );
});

beforeEach(() => {
  jest.clearAllMocks();
});

test('renders loading state correctly', () => {
  const { getByText } = render(<ArticlesList />);
  const loadingElement = getByText(/Loading articles.../i);
  expect(loadingElement).toBeInTheDocument();
});

test('renders articles correctly', async () => {
    render(<ArticlesList />);
    const articleTitleElement = await screen.findByText('Article 1', {}, { timeout: 3000 });
    expect(articleTitleElement).toBeInTheDocument();
});

test('handles pagination correctly', async () => {
  const { getByText, findByText } = render(<ArticlesList />);
  await waitFor(() => {
    const nextButton = getByText('Next');
    fireEvent.click(nextButton);
  });
  const pageTwoArticle = await findByText((content, element) => {
    if (element && element.tagName.toLowerCase() === 'a') {
      return content.includes('Article 4');
    }
    return false;
  });

  expect(pageTwoArticle).toBeInTheDocument();
});
