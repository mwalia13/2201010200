const Navbar = ({ currentPage, setCurrentPage }) => (
  <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-md">
    <div className="max-w-5xl mx-auto flex justify-between items-center py-4 px-6">
      <span className="text-2xl font-extrabold text-emerald-600 tracking-wide">URL-SHORTENER</span>
      <div className="space-x-3">
        {['shortener', 'stats'].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-5 py-2 rounded-xl font-medium capitalize ${
              currentPage === page
                ? 'bg-emerald-500 text-white shadow'
                : 'text-slate-700 hover:text-emerald-600'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  </nav>
);

export default Navbar;
