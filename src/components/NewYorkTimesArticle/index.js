import React from 'react';
import { Link } from 'react-router-dom';

const NewYorkTimesArticle = ({ article }) => {
  const { title, multimedia, url, adx_keywords } = article;
  const imageUrl = multimedia && multimedia[0] ? multimedia[0]?.url : '';
  console.log(multimedia)

  return (
    <div className="flex flex-col border border-gray-200 rounded-lg p-4 mb-4">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover mb-2" />
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{adx_keywords}</p>
      <Link to={url} className="text-blue-500 hover:underline">Read More</Link>
    </div>
  );
};

export default NewYorkTimesArticle;
