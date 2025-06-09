import Styles from './SearchBox.module.css';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SearchBox = () => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [expandedJobId, setExpandedJobId] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [initialLoadDone, setInitialLoadDone] = useState(false);


  const API_URL = import.meta.env.VITE_RAPID_API_URL;
  const API_HOST = import.meta.env.VITE_RAPID_API_HOST;
  const API_KEY = import.meta.env.VITE_RAPID_API_KEY;


 
  const fetchJobs = async ({ query, location, type, page }) => {
  if (loading) return;
  setLoading(true);
  setError(null);

  const searchParams = new URLSearchParams();
  if (query) searchParams.append('query', query);
  if (location) searchParams.append('location', location);
  if (type) searchParams.append('job_type', type);
  searchParams.append('num_pages', '1');
  searchParams.append('page', page || '1');

  try {
    const res = await fetch(`${API_URL}?${searchParams.toString()}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': API_HOST,
      },
    });

    if (res.status === 429) {
      throw new Error('Rate limit exceeded. Please wait and try again.');
    }

    if (!res.ok) {
      throw new Error('No Jobs Available');
    }

    const data = await res.json();
    const newJobs = data.data || [];
    setJobs((prev) => (page === 1 ? newJobs : [...prev, ...newJobs]));
    setHasMore(newJobs.length > 0);
  } catch (err) {
    console.error('API fetch failed. Falling back to mock data:', err.message);
    try {
      const localMockRes = await fetch('/mockJobs.json'); 
      const mockData = await localMockRes.json();
      const paginated = mockData.slice((page - 1) * 10, page * 10);
      setJobs((prev) => (page === 1 ? paginated : [...prev, ...paginated]));
      setHasMore(paginated.length === 10); // adjust if needed
    } catch (localErr) {
      console.error('Failed to load local mock data:', localErr.message);
      setError('Failed to load job listings.');
    }
  } finally {
    setLoading(false);
    setInitialLoadDone(true);
  }
};



  // Initial fetch for default jobs
  useEffect(() => {
    fetchJobs({ query: 'jobs', page: 1 });
  }, []);

 const handleSubmit = (e) => {
  e.preventDefault();
  setPage(1);
  setExpandedJobId(null);
  fetchJobs({ query, location, type, page: 1 });
};
  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchJobs({ query, location, type, page: nextPage });
  };

 


  return (
    <div className={Styles.SearchBox}>
      <div className="container mx-auto p-4 max-w-3xl">
        <form
          onSubmit={handleSubmit}
          className="bg-[#00246b] rounded-xl shadow p-4 grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <input
            type="text"
            placeholder="Job title or Keywords"
            className="border rounded px-3 py-2 w-full"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            className="border rounded px-3 py-2 w-full"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <select
            className="border rounded px-3 py-2 w-full bg-[#00246b]"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Job Type</option>
            <option value="remote">Remote</option>
            <option value="on-site">On-Site</option>
            <option value="hybrid">Hybrid</option>
          </select>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
            disabled={loading}
          >
            Search
          </button>
        </form>

        <div className="mt-16" id={Styles.loadedJobs}>
          {error && <p className="text-red-500">Error: {error}</p>}
          {!loading && jobs.length === 0 && initialLoadDone && (
            <p>No jobs found.</p>
          )}

          <ul className="container">
            {jobs.map((job) => {
              const isOpen = expandedJobId === job.job_id;
              return (
                <li
                  key={job.job_id}
                  className="mb-4 p-4 border-b cursor-pointer"
                  onClick={() =>
                    setExpandedJobId(isOpen ? null : job.job_id)
                  }
                >
                  <div className="shadow p-4">
                    <h3 className="font-bold text-lg text-left" id={Styles.jobH}>
                      {job.job_title}
                    </h3>
                    <p
                      className="text-sm mb-3.5 text-white text-left"
                      id={Styles.jobp}
                    >
                      {job.employer_name} — {job.job_city}, {job.job_country}
                    </p>
                    <p
                      className="text-sm mb-3.5 text-white text-left"
                      id={Styles.jobp}
                    >
                      <strong>Salary:</strong> Not provided
                    </p>
                    <p className="mt-6 text-sm mb-3.5 text-white text-left">
                      <button className="bg-sky-400 p-2 hover:bg-sky-500 transition">
                        Expand
                      </button>
                    </p>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden mt-4 text-sm text-white text-left"
                      >
                        <p>
                          <strong>Type:</strong> {job.job_employment_type}
                        </p>
                        <p>
                          <strong>Location:</strong> {job.job_city}, {job.job_country}
                        </p>
                        {job.job_description && (
                          <>
                            <p className="mt-2">
                              <strong>Description:</strong>
                            </p>
                            <p>{job.job_description.slice(0, 500)}...</p>
                          </>
                        )}
                        {job.job_apply_link && (
                          <a
                            href={job.job_apply_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 bg-sky-400 text-white px-4 py-1 hover:bg-sky-500 transition text-decoration-none"
                          >
                            Apply Now
                          </a>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          {hasMore && !loading && (
            <div className="text-center mt-10">
              <button
                onClick={handleLoadMore}
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
              >
                Load More
              </button>
            </div>
          )}

          {loading && (
            <ul className="space-y-6 mt-10">
              {[...Array(3)].map((_, index) => (
                <li
                  key={index}
                  className="p-4 rounded-xl shadow bg-white animate-pulse space-y-3"
                >
                  <div className="h-5 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
