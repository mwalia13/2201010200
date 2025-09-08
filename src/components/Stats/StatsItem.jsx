import React from "react";

const StatsItem = ({ item }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold text-blue-600 mb-2">
        <a href={item.shortUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
          {item.shortUrl}
        </a>
      </h3>
      <p className="text-sm text-gray-700">
        <strong>Original:</strong> {item.longUrl}
      </p>
      <p className="text-sm text-gray-600 mt-1">
        <strong>Clicks:</strong> {item.clicks}
      </p>
      <p className="text-xs text-gray-500 mt-1">
        <strong>Expires:</strong> {new Date(item.expiryDate).toLocaleString()}
      </p>
    </div>
  );
};

export default StatsItem;
