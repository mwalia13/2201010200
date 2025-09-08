import React from 'react';
import ShortenedList from './ShortenedList';

const ShortenerPage = ({ urls, shortenedUrls, updateUrl, handleShorten, errorMessage }) => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-6 text-gray-800">URL Shortener Page</h2>
    {errorMessage && (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
        {errorMessage}
      </div>
    )}
    <div className="space-y-4">
      {urls.map((url, index) => (
        <div key={index} className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter long URL..."
            value={url}
            onChange={(e) => updateUrl(index, e.target.value)}
          />
          <button
            onClick={() => handleShorten(index)}
            className="w-full sm:w-auto px-6 py-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 transition-colors"
          >
            Shorten
          </button>
        </div>
      ))}
    </div>
    <ShortenedList shortenedUrls={shortenedUrls} />
  </div>
);

export default ShortenerPage;
