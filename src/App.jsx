import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ShortenerPage from './components/Shortener/ShortenerPage';
import StatsPage from './components/Stats/StatsPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('shortener');
  const [urls, setUrls] = useState(['', '', '', '', '']);
  const [shortenedUrls, setShortenedUrls] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [stats, setStats] = useState([]);

  const shortenUrl = (longUrl) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!longUrl) {
          reject(new Error("URL cannot be empty."));
          return;
        }
        const urlPattern = new RegExp('^(https?:\\/\\/)?' +
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
          '((\\d{1,3}\\.){3}\\d{1,3}))' +
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
          '(\\?[;&a-z\\d%_.~+=-]*)?' +
          '(\\#[-a-z\\d_]*)?$', 'i');

        if (!urlPattern.test(longUrl)) {
          reject(new Error("Invalid URL format."));
          return;
        }

        const shortcode = Math.random().toString(36).substring(2, 8);
        const expiry = new Date(Date.now() + 30 * 60000);

        const newShortenedUrl = {
          longUrl,
          shortUrl: `http://localhost:3000/${shortcode}`,
          expiryDate: expiry.toISOString(),
          clicks: 0,
          geo: {}
        };

        setShortenedUrls(prev => [...prev, newShortenedUrl]);
        setUrls(['', '', '', '', '']);
        resolve(newShortenedUrl);
      }, 500);
    });
  };

  const handleShorten = async (index) => {
    setErrorMessage('');
    const longUrl = urls[index];
    try {
      await shortenUrl(longUrl);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const updateUrl = (index, value) => {
    setUrls(prev => {
      const newUrls = [...prev];
      newUrls[index] = value;
      return newUrls;
    });
  };

  const handleFetchStats = () => {
    const mockStats = shortenedUrls.map(url => ({
      ...url,
      clicks: Math.floor(Math.random() * 1000),
      geo: {
        'US': Math.floor(Math.random() * 500),
        'CA': Math.floor(Math.random() * 200),
        'UK': Math.floor(Math.random() * 100),
      }
    }));
    setStats(mockStats);
  };

  useEffect(() => {
    if (currentPage === 'stats') {
      handleFetchStats();
    }
  }, [currentPage]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="max-w-full mx-auto mt-8 bg-white shadow-lg rounded-lg">
        {currentPage === 'shortener'
          ? <ShortenerPage urls={urls} shortenedUrls={shortenedUrls} updateUrl={updateUrl} handleShorten={handleShorten} errorMessage={errorMessage} />
          : <StatsPage stats={stats} />}
      </main>
    </div>
  );
};

export default App;
