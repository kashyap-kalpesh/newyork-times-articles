import React, { useState, useEffect } from 'react';
import NewYorkTimesArticle from '../NewYorkTimesArticle/NewYorkTimesArticle';
import getAllArticles from '../../services/getAllArticles';

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { results } = await getAllArticles();
        setArticles(results);
        setIsLoading(false);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * 6;
  const endIndex = startIndex + 6;
  const paginatedArticles = articles.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Most Watched Articles</h1>
      {isLoading && <p>Loading articles...</p>}
      {error && (
        <p>
          Error fetching articles:
          {error.message}
        </p>
      )}
      {!!articles.length && (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginatedArticles.map((article) => (
            <NewYorkTimesArticle key={article.url} article={article} />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {currentPage > 1 && (
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 mr-2"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          )}
          {articles.length > endIndex && (
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
          )}
        </div>
      </>
      )}
    </div>
  );
};

export default ArticlesList;
