import React from 'react';
import PropTypes from 'prop-types';

const NewYorkTimesArticle = ({ article }) => {
  /* eslint-disable camelcase */
  const {
    title,
    multimedia,
    url,
    adx_keywords: adxKeywords,
  } = article;
  /* eslint-enable camelcase */

  const imageUrl = multimedia && multimedia.length ? multimedia[0]?.url : '';

  return (
    <div className="flex flex-col border border-gray-200 rounded-lg p-4 mb-4">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover mb-2" />
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{adxKeywords}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read More</a>
    </div>
  );
};

NewYorkTimesArticle.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    multimedia: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
    })),
    url: PropTypes.string.isRequired,
    adx_keywords: PropTypes.string,
  }).isRequired,
};

export default NewYorkTimesArticle;
