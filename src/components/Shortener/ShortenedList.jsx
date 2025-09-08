import React from "react";

const ShortenedList = ({ shortenedUrls }) => (
  shortenedUrls.length > 0 && (
    <div className="mt-10 max-w-5xl mx-auto">
      <h3 className="text-2xl font-semibold mb-6 text-slate-800">Your Shortened Links</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {shortenedUrls.map((item, index) => (
          <div
            key={index}
            className="p-5 rounded-xl bg-gradient-to-br from-emerald-50 to-white shadow-md hover:shadow-xl"
          >
            <p className="text-sm text-slate-600 truncate">
              <span className="font-bold">Original:</span> {item.longUrl}
            </p>
            <p className="mt-2">
              <span className="font-bold">Short:</span>{" "}
              <a href={item.shortUrl} className="text-emerald-600 font-medium hover:underline">
                {item.shortUrl}
              </a>
            </p>
            <p className="mt-1 text-xs text-slate-500">
              ⏳ Expires: {new Date(item.expiryDate).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
);

export default ShortenedList;
